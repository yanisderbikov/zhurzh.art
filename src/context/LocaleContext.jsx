import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/** Russian UI when pathname is /ru or anything under /ru/ */
export function pathIsRussian(pathname) {
    return pathname === '/ru' || pathname.startsWith('/ru/');
}

/** Prefix target path with /ru when the current route is under /ru. */
export function localizePath(currentPathname, targetPath) {
    const p = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    if (pathIsRussian(currentPathname)) {
        if (p === '/') return '/ru';
        return `/ru${p}`;
    }
    if (p === '/ru' || p === '/ru/') return '/';
    if (p.startsWith('/ru/')) {
        const rest = p.slice(3);
        return rest ? `/${rest}` : '/';
    }
    return p;
}

const defaultValue = {
    isRu: false,
    localizePath: (path) => (path.startsWith('/') ? path : `/${path}`),
};

const LocaleContext = createContext(defaultValue);

export function LocaleProvider({ children }) {
    const { pathname } = useLocation();
    const isRu = pathIsRussian(pathname);
    const localizePathFn = useCallback(
        (path) => localizePath(pathname, path),
        [pathname]
    );

    const value = useMemo(
        () => ({
            isRu,
            localizePath: localizePathFn,
        }),
        [isRu, localizePathFn]
    );

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
