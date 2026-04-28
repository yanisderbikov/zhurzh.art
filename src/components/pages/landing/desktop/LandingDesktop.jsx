import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../../styles/pages/landing/LandingDesktop.module.css';
import Text from '../../../common/Text.jsx';
import Button from '../../../common/Button.jsx';
import { useLocale } from '../../../../context/LocaleContext.jsx';
import { landingTranslations } from '../../../../locales/landing.js';
import { landingAssets } from '../../../../content/landing.assets.js';

export default function LandingDesktop() {
    const navigate = useNavigate();
    const { isRu, localizePath } = useLocale();
    const t = landingTranslations[isRu ? 'ru' : 'en'];
    const a = landingAssets;
    const patreonReadComic = 'https://www.patreon.com/collection/39648';
    const patreonArticlesWorlds = 'https://www.patreon.com/collection/783458?view=expanded';
    const patreonLore = 'https://www.patreon.com/collection/98091';
    const patreonAdopt = 'https://www.patreon.com/collection/784035?view=expanded';

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
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleAltumar}`}>
                                {t.altumarTitle}
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                {t.altumarP}
                            </Text>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    onClick={() =>
                                        isRu
                                            ? navigate(localizePath('/comic'))
                                            : window.open('https://www.patreon.com/collection/39648', '_blank')
                                    }
                                    className={styles.actionButton}
                                >
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
                                <Button
                                    onClick={() =>
                                        isRu
                                            ? navigate(localizePath('/articles'))
                                            : window.open('https://www.patreon.com/collection/783458', '_blank')
                                    }
                                    className={styles.actionButton}
                                >
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
                                {t.supportTitle}
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                {t.supportPBeforeChannels}
                                <span style={{ color: '#fd9dff' }}>{t.supportPChannels}</span>
                                {t.supportPBeforeAdopt}
                                <span style={{ color: '#9dcbff' }}>{t.supportPAdopt}</span>
                                {t.supportPAfter}
                            </Text>
                        </div>
                    </div>
                    <div className={styles.supportCardsWrapper}>
                        <div className={styles.supportCards}>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src={a.supportGroup1.desktop} alt={t.exclusive} />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        {t.exclusive}
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src={a.supportGroup2.desktop} alt={t.adopts} />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        {t.adopts}
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src={a.supportGroup3.desktop} alt={t.donate} />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        {t.donate}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thankYouWrapper}>
                        <Text variant="body" className={styles.thankYouText} color={'#81a9d8'}>
                            {t.thankYou}
                        </Text>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    onClick={() =>
                                        isRu
                                            ? window.open('https://t.me/ZhurzhArt', '_blank')
                                            : window.open('https://www.patreon.com/c/ZHURZH_dragonartist', '_blank')
                                    }
                                    className={styles.actionButton}
                                    {...(isRu && { imageSrc: '/images/article/community/telegram.svg' })}
                                >
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
                                Read comic
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
                                Articles &amp; worlds
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
