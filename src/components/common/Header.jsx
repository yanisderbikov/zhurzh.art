import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/common/Header.module.css';
import Text from './Text.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { headerTranslations } from '../../locales/landing.js';

export default function Header() {
    const { isRu, localizePath } = useLocale();
    const t = headerTranslations[isRu ? 'ru' : 'en'];

    const navLinks = isRu
        ? [
            { label: t.comic, href: 'https://t.me/ZhurzhArt/30' },
            { label: t.articles, href: 'https://t.me/ZhurzhArt/30' },
        ]
        : [
            { label: t.comic, href: 'https://www.patreon.com/collection/39648' },
            { label: t.articles, href: 'https://www.patreon.com/collection/783458' },
        ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={localizePath('/')} className={styles.title}>
                    <Text variant="h3" color="#92c5ff" style={{ fontSize: '18px' }}>
                        {t.siteTitle}
                    </Text>
                </Link>
                <nav className={styles.nav}>
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
            </div>
        </header>
    );
}

