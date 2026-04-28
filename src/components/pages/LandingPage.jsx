import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/pages/LandingPage.module.css';
import Text from '../common/Text.jsx';
import Button from '../common/Button.jsx';
import Header from '../common/Header.jsx';
import { useLocale } from '../../context/LocaleContext.jsx';
import { landingTranslations } from '../../locales/landing.js';

export default function LandingPage() {
    const navigate = useNavigate();
    const { isRu } = useLocale();
    const t = landingTranslations[isRu ? 'ru' : 'en'];

    return (
        <div className={styles.wrapper}>
            <Header />

            <section className={styles.fullScreenSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(https://storage.yandexcloud.net/zhurzh/landing/1.png)' }}></div>
                <div className={styles.overlay}></div>
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
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(https://storage.yandexcloud.net/zhurzh/landing/2.png)' }}></div>
                <div className={styles.overlay}></div>
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
                                    onClick={() => isRu ? navigate('/comic') : window.open('https://www.patreon.com/collection/39648', '_blank')}
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
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(https://storage.yandexcloud.net/zhurzh/landing/3.png)' }}></div>
                <div className={styles.overlay}></div>
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
                                    onClick={() => isRu ? navigate('/articles') : window.open('https://www.patreon.com/collection/783458', '_blank')}
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
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(https://storage.yandexcloud.net/zhurzh/landing/4.png)' }}></div>
                <div className={styles.overlay}></div>
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
                                    <img src="https://storage.yandexcloud.net/zhurzh/landing/group1.png" alt={t.exclusive} />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        {t.exclusive}
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="https://storage.yandexcloud.net/zhurzh/landing/group2.png" alt={t.adopts} />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        {t.adopts}
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="https://storage.yandexcloud.net/zhurzh/landing/group3.png" alt={t.donate} />
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
                                    onClick={() => isRu ? window.open('https://t.me/ZhurzhArt', '_blank') : window.open('https://www.patreon.com/c/ZHURZH_dragonartist', '_blank')}
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

            <footer className={styles.footer}>
                {/*<div className={styles.footerContent}>*/}
                {/*    <div className={styles.footerColumn}>*/}
                {/*        <Text variant="h4" className={styles.footerTitle}>{t.footerMain}</Text>*/}
                {/*        <a href="/" className={styles.footerLink}>{t.footerSeaReminiscence}</a>*/}
                {/*        <a href="/comic" className={styles.footerLink}>{t.footerReadComic}</a>*/}
                {/*        <a href="/comic/archive" className={styles.footerLink}>{t.footerArchive}</a>*/}
                {/*        <a href="/about" className={styles.footerLink}>{t.footerAbout}</a>*/}
                {/*        <a href="/materials" className={styles.footerLink}>{t.footerMaterials}</a>*/}
                {/*    </div>*/}
                {/*    <div className={styles.footerColumn}>*/}
                {/*        <Text variant="h4" className={styles.footerTitle}>{t.footerWorld}</Text>*/}
                {/*        <a href="/articles" className={styles.footerLink}>{t.footerArticles}</a>*/}
                {/*        <a href="/adopts" className={styles.footerLink}>{t.footerAdopts}</a>*/}
                {/*        <a href="/glossary" className={styles.footerLink}>{t.footerGlossary}</a>*/}
                {/*        <a href="/map" className={styles.footerLink}>{t.footerMap}</a>*/}
                {/*    </div>*/}
                {/*    <div className={styles.footerColumn}>*/}
                {/*        <Text variant="h4" className={styles.footerTitle}>{t.footerFaq}</Text>*/}
                {/*        <a href="/faq/comic" className={styles.footerLink}>{t.footerWhereComic}</a>*/}
                {/*        <a href="/faq/wyvern" className={styles.footerLink}>{t.footerHowWyvern}</a>*/}
                {/*        <a href="/faq/thank" className={styles.footerLink}>{t.footerHowThank}</a>*/}
                {/*    </div>*/}
                {/*    <div className={styles.footerColumn}>*/}
                {/*        <Text variant="h4" className={styles.footerTitle}>{t.footerFanbase}</Text>*/}
                {/*        <a href="/fanbase/comic" className={styles.footerLink}>{t.footerFullComic}</a>*/}
                {/*        <a href="/fanbase/exclusive" className={styles.footerLink}>{t.footerExclusive}</a>*/}
                {/*        <a href="/fanbase/worlds" className={styles.footerLink}>{t.footerWorlds}</a>*/}
                {/*        <a href="/fanbase/wallpapers" className={styles.footerLink}>{t.footerWallpapers}</a>*/}
                {/*        <a href="/fanbase/donate" className={styles.footerLink}>{t.footerDonate}</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Text variant="sign" className={styles.copyright}>
                    {t.copyright}
                </Text>
            </footer>
        </div>
    );
}
