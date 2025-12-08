import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/common/Header.module.css';
import Text from './Text.jsx';

export default function Header() {
    const location = useLocation();

    const navLinks = [
        { path: '/comic', label: 'Комикс' },
        { path: '/articles', label: 'Статьи' },
        { path: '/map', label: 'Карта мира' },
        { path: '/characters', label: 'Персонажи' },
        { path: '/about', label: 'Об авторе' },
    ];

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.title}>
                    <Text variant="h3" color="#92c5ff" style={{ fontSize: '18px' }}>
                        МОРСКАЯ РЕМИНИСЦЕНЦИЯ
                    </Text>
                </Link>
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`${styles.navLink} ${
                                isActive(link.path) ? styles.active : ''
                            }`}
                        >
                            <Text variant="body" color="#92c5ff">
                                {link.label}
                            </Text>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

