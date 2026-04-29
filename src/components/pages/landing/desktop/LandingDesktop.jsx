import React, { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../../../styles/pages/landing/LandingDesktop.module.css';
import Text from '../../../common/Text.jsx';
import Button from '../../../common/Button.jsx';
import { useLocale } from '../../../../context/LocaleContext.jsx';
import { landingTranslations } from '../../../../locales/landing.js';
import { landingAssets } from '../../../../content/landing.assets.js';
import { landingMobileAssets } from '../../../../content/landing.mobile.assets.js';

export default function LandingDesktop() {
    const navigate = useNavigate();
    const { isRu, localizePath } = useLocale();
    const t = landingTranslations[isRu ? 'ru' : 'en'];
    const a = landingAssets;
    const tiles = landingMobileAssets;
    const patreonReadComic = 'https://www.patreon.com/collection/39648';
    const patreonArticlesWorlds = 'https://www.patreon.com/collection/783458?view=expanded';
    const patreonLore = 'https://www.patreon.com/collection/98091';
    const patreonAdopt = 'https://www.patreon.com/collection/784035?view=expanded';

    const altumarTitleRef = useRef(null);
    const articlesPath = localizePath('/articles');

    const scrollToAltumar = useCallback(() => {
        const el = altumarTitleRef.current;
        if (!el) {
            return;
        }
        const raw = getComputedStyle(document.documentElement).getPropertyValue('--header-height').trim();
        const headerPx = Number.parseFloat(raw);
        const offset = Number.isFinite(headerPx) ? headerPx : 64;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, []);

    const openComic = useCallback(() => {
        if (isRu) {
            navigate(localizePath('/comic'));
        } else {
            window.open('https://www.patreon.com/collection/39648', '_blank', 'noopener,noreferrer');
        }
    }, [isRu, navigate, localizePath]);

    const goArticles = useCallback(() => {
        if (isRu) {
            navigate(articlesPath);
        } else {
            window.open('https://www.patreon.com/collection/783458', '_blank', 'noopener,noreferrer');
        }
    }, [isRu, navigate, articlesPath]);

    const goPatreon = useCallback(() => {
        if (isRu) {
            window.open('https://t.me/ZhurzhArt', '_blank', 'noopener,noreferrer');
        } else {
            window.open('https://www.patreon.com/c/ZHURZH_dragonartist', '_blank', 'noopener,noreferrer');
        }
    }, [isRu]);

    const fullComicHref = isRu ? 'https://t.me/ZhurzhArt/30' : 'https://www.patreon.com/collection/39648';
    const worldLoreHref = isRu ? articlesPath : 'https://www.patreon.com/collection/783458';
    const communityHref = isRu ? 'https://t.me/ZhurzhArt' : 'https://www.patreon.com/c/ZHURZH_dragonartist';

    return (
        <div className={styles.wrapper}>
            <section className={styles.fullScreenSection}>
                <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${a.heroBg.desktop})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleReminiscence}`}>
                                {t.heroTitle}
                            </Text>
                            <div className={styles.textParagraphs}>
                                <Text variant="body" className={styles.paragraph}>
                                    {t.heroP1}
                                </Text>
                                <Text variant="body" className={styles.paragraph}>
                                    {t.heroP2}
                                </Text>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Button type="button" onClick={scrollToAltumar} className={styles.actionButton}>
                                    {t.diveIntoWorld}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.fullScreenSection}>
                <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${a.altumarBg.desktop})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <div ref={altumarTitleRef} className={styles.altumarScrollTarget}>
                                <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleAltumar}`}>
                                    {t.altumarTitle}
                                </Text>
                            </div>
                            <Text variant="body" className={styles.paragraph}>
                                {t.altumarP}
                            </Text>
                            <div className={styles.buttonWrapper}>
                                <Button type="button" onClick={openComic} className={styles.actionButton}>
                                    {t.readComic}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.fullScreenSection}>
                <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${a.settingBg.desktop})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleSetting}`}>
                                {t.settingTitle}
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                {t.settingP}
                            </Text>
                            <div className={styles.buttonWrapper}>
                                <Button type="button" onClick={goArticles} className={styles.actionButton}>
                                    {t.toArticles}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.fullScreenSection}>
                <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${a.supportBg.desktop})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleSupport}`}>
                                {t.joinCommunityTitle}
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                {!isRu ? (
                                    <>
                                        Subscribe on Patreon to read{' '}
                                        <span style={{ color: '#FD9DFF' }}>over 100 pages of the comic</span>, be
                                        the first to discover secrets of the underwater world in articles, and see
                                        more than 60 wyvern illustrations.{' '}
                                        <span style={{ color: '#9DB9FF' }}>Join the Discord server</span> and connect
                                        with fellow fans!
                                    </>
                                ) : (
                                    t.joinCommunityP
                                )}
                            </Text>
                        </div>
                    </div>
                    <div className={styles.communityTilesWrapper}>
                        <div className={styles.communityTiles}>
                            <CommunityTile
                                href={fullComicHref}
                                external
                                src={tiles.tileFullComic}
                                label={t.tileFullComic}
                                s={styles}
                            />
                            <CommunityTile
                                href={worldLoreHref}
                                external={!isRu}
                                src={tiles.tileWorldLore}
                                label={t.tileWorldLore}
                                s={styles}
                            />
                            <CommunityTile
                                href={communityHref}
                                external
                                src={tiles.tileCommunity}
                                label={t.tileCommunity}
                                s={styles}
                            />
                        </div>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <div className={styles.buttonWrapper}>
                                <Button type="button" onClick={goPatreon} className={styles.actionButton}>
                                    {t.supportCtaLabel}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.desktopFooter}>
                <div className={styles.desktopFooterColumns}>
                    <div className={styles.desktopFooterCol}>
                        <Text variant="h3" className={styles.desktopFooterTitle}>
                            MAIN
                        </Text>
                        <a
                            href={patreonReadComic}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.desktopFooterLink}
                        >
                            <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                Read the Comic
                            </Text>
                        </a>
                    </div>

                    <div className={styles.desktopFooterCol}>
                        <Text variant="h3" className={styles.desktopFooterTitle}>
                            ABOUT THE WORLD
                        </Text>
                        <a
                            href={patreonArticlesWorlds}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.desktopFooterLink}
                        >
                            <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                Articles
                            </Text>
                        </a>
                        <a
                            href={patreonLore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.desktopFooterLink}
                        >
                            <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                Lore
                            </Text>
                        </a>
                        <a
                            href={patreonAdopt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.desktopFooterLink}
                        >
                            <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                Adopt
                            </Text>
                        </a>
                    </div>
                </div>

                <div className={styles.desktopFooterBottom}>
                    <Text variant="sign" className={styles.desktopFooterCopy}>
                        {t.copyright}
                    </Text>
                    <Text variant="sign" className={styles.desktopFooterMeta}>
                        Privacy Policy | Terms of Use
                    </Text>
                </div>
            </footer>
        </div>
    );
}

function CommunityTile({ href, external, src, label, s }) {
    const inner = (
        <>
            <img src={src} alt="" className={s.communityTileImage} />
            <span className={s.communityTileLabel}>{label}</span>
        </>
    );

    if (!external) {
        return (
            <Link to={href} className={s.communityTileLink}>
                {inner}
            </Link>
        );
    }

    return (
        <a href={href} className={s.communityTileLink} target="_blank" rel="noopener noreferrer">
            {inner}
        </a>
    );
}
