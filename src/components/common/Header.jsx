import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/common/Header.module.css';
import Text from './Text.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { headerTranslations } from '../../locales/landing.js';
import useIsMobile from '../../hooks/useIsMobile.js';

const LOGO_URL = 'https://storage.yandexcloud.net/zhurzh/landing/logo.png';

export default function Header() {
    const isMobile = useIsMobile();
    const { isRu, localizePath } = useLocale();
    const t = headerTranslations[isRu ? 'ru' : 'en'];
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = isRu
        ? [
              { label: t.comic, href: 'https://t.me/ZhurzhArt/30' },
              { label: t.articles, href: 'https://t.me/ZhurzhArt/30' },
          ]
        : [
              { label: t.comic, href: 'https://www.patreon.com/collection/39648' },
              { label: t.articles, href: 'https://www.patreon.com/collection/783458' },
          ];

    const closeDrawer = useCallback(() => setDrawerOpen(false), []);
    const openDrawer = useCallback(() => setDrawerOpen(true), []);

    useEffect(() => {
        if (!isMobile) {
            setDrawerOpen(false);
        }
    }, [isMobile]);

    useEffect(() => {
        if (!drawerOpen) {
            return undefined;
        }
        const onKey = (e) => {
            if (e.key === 'Escape') {
                closeDrawer();
            }
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [drawerOpen, closeDrawer]);

    const menuAria = isRu ? 'Открыть меню' : 'Open menu';

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link to={localizePath('/')} className={styles.logoLink}>
                        <img src={LOGO_URL} alt={t.siteTitle} className={styles.logoImg} />
                    </Link>

                    {isMobile ? (
                        <button
                            type="button"
                            className={styles.burger}
                            aria-expanded={drawerOpen}
                            aria-controls="site-nav-drawer"
                            aria-label={menuAria}
                            onClick={() => (drawerOpen ? closeDrawer() : openDrawer())}
                        >
                            <img src="/images/burger.svg" alt="" width={26} height={18} />
                        </button>
                    ) : (
                        <nav className={styles.nav} aria-label="Main">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href + link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.navLink}
                                >
                                    <Text variant="body" color="#92c5ff">
                                        {link.label}
                                    </Text>
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </header>

            {isMobile && (
                <>
                    <div
                        className={`${styles.backdrop} ${drawerOpen ? styles.backdropVisible : ''}`}
                        aria-hidden={!drawerOpen}
                        onClick={closeDrawer}
                    />
                    <aside
                        id="site-nav-drawer"
                        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}
                        aria-hidden={!drawerOpen}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href + link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.drawerNavLink}
                                onClick={closeDrawer}
                            >
                                <Text variant="body" color="#92c5ff">
                                    {link.label}
                                </Text>
                            </a>
                        ))}
                    </aside>
                </>
            )}
        </>
    );
}
