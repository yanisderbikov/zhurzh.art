import React, { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../../../styles/pages/landing/LandingMobile.module.css';
import Text from '../../../common/Text.jsx';
import Button from '../../../common/Button.jsx';
import { useLocale } from '../../../../context/LocaleContext.jsx';
import { landingMobileTranslations, landingTranslations } from '../../../../locales/landing.js';
import { landingMobileAssets } from '../../../../content/landing.mobile.assets.js';

export default function LandingMobile() {
    const navigate = useNavigate();
    const { isRu, localizePath } = useLocale();
    const m = landingMobileTranslations[isRu ? 'ru' : 'en'];
    const footerT = landingTranslations[isRu ? 'ru' : 'en'];
    const assets = landingMobileAssets;

    const altumarRef = useRef(null);
    const scrollToAltumar = useCallback(() => {
        altumarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const openComic = useCallback(() => {
        if (isRu) {
            window.open('https://t.me/ZhurzhArt/30', '_blank', 'noopener,noreferrer');
        } else {
            window.open('https://www.patreon.com/collection/39648', '_blank', 'noopener,noreferrer');
        }
    }, [isRu]);

    const goArticles = useCallback(() => {
        if (isRu) {
            navigate(localizePath('/articles'));
        } else {
            window.open('https://www.patreon.com/collection/783458', '_blank', 'noopener,noreferrer');
        }
    }, [isRu, navigate, localizePath]);

    const goPatreon = useCallback(() => {
        if (isRu) {
            window.open('https://t.me/ZhurzhArt', '_blank', 'noopener,noreferrer');
        } else {
            window.open('https://www.patreon.com/c/ZHURZH_dragonartist', '_blank', 'noopener,noreferrer');
        }
    }, [isRu]);

    const articlesPath = localizePath('/articles');
    const patreonReadComic = 'https://www.patreon.com/collection/39648';
    const patreonArticlesWorlds = 'https://www.patreon.com/collection/783458?view=expanded';
    const patreonLore = 'https://www.patreon.com/collection/98091';
    const patreonAdopt = 'https://www.patreon.com/collection/784035?view=expanded';
    const isEn = !isRu;

    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <section
                    className={`${styles.hero} ${styles.bgCover}`}
                    style={{ backgroundImage: `url(${assets.heroBackground})` }}
                    aria-label={m.heroTitle}
                >
                    <div className={styles.rail}>
                        <Text variant="h1" className={styles.titleHero}>
                            {m.heroTitle}
                        </Text>
                        <Text variant="body" className={styles.lead}>
                            {isEn ? (
                                <>
                                    This world holds more than beauty. Echoes of{' '}
                                    <span className={styles.textCream}>ancient conflicts and mysteries</span> linger here, and they may change the future. Dive into the world of Sea Reminiscence and follow its heroes!
                                </>
                            ) : (
                                m.heroLead
                            )}
                        </Text>
                        <div className={styles.btnRow}>
                            <Button type="button" onClick={scrollToAltumar} className={styles.actionButton}>
                                {m.diveIntoWorld}
                            </Button>
                        </div>
                    </div>
                </section>

                <section ref={altumarRef} className={styles.altumar}>
                    <div className={styles.rail}>
                        <Text variant="h1" className={styles.titleAltumar}>
                            {m.altumarTitle}
                        </Text>
                        <div className={styles.altumarStackTight}>
                            <Text variant="body" className={styles.lead}>
                                {isEn ? (
                                    <>
                                        In a world of hidden oceans and mythic lands, a great journey begins.{' '}
                                        <span className={styles.textBlue}>Altumar, born during the Second Rip Current</span>, knew only the depths and legends of the land. When the waters fell still, he{' '}
                                        <span className={styles.textBlue}>rose to the surface,</span> where reality is harsher than tales...
                                    </>
                                ) : (
                                    m.altumarLead
                                )}
                            </Text>
                            <div className={`${styles.fullBleed} ${styles.fullBleedNoOverlay}`}>
                                <img src={assets.altumarBlockImage} alt="" />
                            </div>
                            <div className={styles.btnRow}>
                                <Button type="button" onClick={openComic} className={styles.actionButton}>
                                    {m.readComic}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className={`${styles.moreWorld} ${styles.bgCover}`}
                    style={{ backgroundImage: `url(${assets.loreBackground})` }}
                >
                    <div className={styles.rail}>
                        <Text variant="h1" className={styles.titleWorld}>
                            {m.moreWorldTitle}
                        </Text>
                        <Text variant="body" className={styles.lead}>
                            {isEn ? (
                                <>
                                    Beyond the comic, Sea Reminiscence has a rich world of its own. Explore{' '}
                                    <span className={styles.textBlue}>articles about wyverns,</span> their anatomy, culture, underwater clans, and many other details, brought to life with vivid illustrations.
                                </>
                            ) : (
                                m.moreWorldLead
                            )}
                        </Text>
                        <div className={styles.btnRow}>
                            <Button type="button" onClick={goArticles} className={styles.actionButton}>
                                {m.goToArticles}
                            </Button>
                        </div>
                    </div>
                </section>

                <section className={styles.joinBlock}>
                    <div className={styles.rail}>
                        <Text variant="h1" className={styles.titleJoin}>
                            {m.joinCommunityTitle}
                        </Text>
                        <Text variant="body" className={styles.lead}>
                            {isEn ? (
                                <>
                                    Subscribe on Patreon to read{' '}
                                    <span className={styles.textPink}>over 100 pages of the comic</span>, be the first to discover secrets of the underwater world in articles, and see more than 60 illustrations.{' '}
                                    <span className={styles.textBlue}>Join the Discord server</span> and connect with fellow fans!
                                </>
                            ) : (
                                m.joinCommunityLead
                            )}
                        </Text>
                        <div className={styles.tileGrid}>
                            <TileLink
                                to={isRu ? 'https://t.me/ZhurzhArt/30' : 'https://www.patreon.com/collection/39648'}
                                external
                                src={assets.tileFullComic}
                                label={m.tileFullComic}
                                s={styles}
                            />
                            <TileLink
                                to={isRu ? articlesPath : 'https://www.patreon.com/collection/783458'}
                                external={!isRu}
                                src={assets.tileWorldLore}
                                label={m.tileWorldLore}
                                s={styles}
                            />
                            <TileLink
                                to={articlesPath}
                                external={false}
                                src={assets.tileWyverns}
                                label={m.tileWyverns}
                                s={styles}
                            />
                            <TileLink
                                to={isRu ? 'https://t.me/ZhurzhArt' : 'https://www.patreon.com/c/ZHURZH_dragonartist'}
                                external
                                src={assets.tileCommunity}
                                label={m.tileCommunity}
                                s={styles}
                            />
                        </div>
                    </div>
                    <div
                        className={styles.supportCta}
                        style={{ backgroundImage: `url(${assets.finalImage})` }}
                    >
                        <div className={styles.supportCtaInner}>
                            <Button type="button" onClick={goPatreon} className={styles.actionButton}>
                                {m.goToPatreon}
                            </Button>
                        </div>
                    </div>
                </section>

                <footer className={styles.footerMenu}>
                    <div className={styles.footerColumns}>
                        <div className={styles.footerCol}>
                            <Text variant="h3" className={styles.footerTitle}>
                                MAIN
                            </Text>
                            <a
                                href={patreonReadComic}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                    Read the Comic
                                </Text>
                            </a>
                        </div>

                        <div className={styles.footerCol}>
                            <Text variant="h3" className={styles.footerTitle}>
                                ABOUT THE WORLD
                            </Text>
                            <a
                                href={patreonArticlesWorlds}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                    Articles
                                </Text>
                            </a>
                            <a
                                href={patreonLore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                    Lore
                                </Text>
                            </a>
                            <a
                                href={patreonAdopt}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                <Text variant="body" color="#9599C3" style={{ fontSize: '14px' }}>
                                    Adopt
                                </Text>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <Text variant="sign" className={styles.footerCopy}>
                            {footerT.copyright}
                        </Text>
                        <Text variant="sign" className={styles.footerMeta}>
                            {isRu ? 'Политика конфиденциальности | Условия использования' : 'Privacy Policy | Terms of Use'}
                        </Text>
                    </div>
                </footer>
            </main>
        </div>
    );
}

function TileLink({ to, external, src, label, s }) {
    const inner = (
        <>
            <img src={src} alt="" />
            <span className={s.tileLabel}>{label}</span>
        </>
    );

    if (!external) {
        return (
            <Link to={to} className={s.tileLink}>
                {inner}
            </Link>
        );
    }

    return (
        <a href={to} className={s.tileLink} target="_blank" rel="noopener noreferrer">
            {inner}
        </a>
    );
}
