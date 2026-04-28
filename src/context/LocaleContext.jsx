import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'zhurzh-locale';
const GEO_API_URL = 'https://ip-api.com/json/?fields=countryCode';

function getStoredLocale() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ru' || stored === 'en') return stored;
    } catch (_) {}
    return null;
}

function getNavigatorLocale() {
    const lang = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage || '');
    if (!lang) return null;
    const code = lang.toLowerCase().slice(0, 2);
    if (code === 'ru') return 'ru';
    if (code === 'en') return 'en';
    return null;
}

const defaultLocale = 'en';
const defaultValue = {
    locale: defaultLocale,
    isRu: false,
    ready: false,
    setLocale: () => {},
};

const LocaleContext = createContext(defaultValue);

export function LocaleProvider({ children }) {
    const stored = getStoredLocale();
    const navLocale = getNavigatorLocale();
    const needsGeo = !stored && !navLocale;

    const [locale, setLocaleState] = useState(() => stored ?? navLocale ?? defaultLocale);
    const [ready, setReady] = useState(!needsGeo);

    useEffect(() => {
        if (!needsGeo) return;
        let cancelled = false;
        fetch(GEO_API_URL)
            .then((res) => res.json())
            .then((data) => {
                if (cancelled) return;
                setLocaleState(data.countryCode === 'RU' ? 'ru' : 'en');
            })
            .catch(() => {
                if (cancelled) return;
                setLocaleState(navLocale ?? defaultLocale);
            })
            .finally(() => {
                if (!cancelled) setReady(true);
            });
        return () => { cancelled = true; };
    }, [needsGeo, navLocale]);

    const setLocale = useCallback((newLocale) => {
        if (newLocale !== 'ru' && newLocale !== 'en') return;
        try {
            localStorage.setItem(STORAGE_KEY, newLocale);
        } catch (_) {}
        setLocaleState(newLocale);
    }, []);

    const value = {
        locale,
        isRu: locale === 'ru',
        ready,
        setLocale,
    };

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) return defaultValue;
    return ctx;
}
