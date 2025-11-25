import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/pages/LandingPage.module.css';
import Text from '../common/Text.jsx';
import Button from '../common/Button.jsx';
import Header from '../common/Header.jsx';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <Header />
            
            {/* Hero Section - Мир Морской Реминисценции */}
            <section className={styles.fullScreenSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(/images/landing/1.png)' }}></div>
                <div className={styles.overlay}></div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleReminiscence}`}>
                                Мир Морской Реминисценции
                            </Text>
                            <div className={styles.textParagraphs}>
                                <Text variant="body" className={styles.paragraph}>
                                    Океаны и моря разделяют материки, а под их гладью скрываются бескрайние просторы. Величественные горы на суше соседствуют с темными глубинами под водой. Здесь живут чешуйчатые создания — от гордых драконов до скрытных виверн.
                                </Text>
                                <Text variant="body" className={styles.paragraph}>
                                    Но этот мир хранит не только красоту — в его памяти живут отголоски древних конфликтов и загадки, ответ на которые может изменить будущее. Погрузись в мир Морской Реминисценции, чтобы пройти путь рядом с его героями!
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* История Альтумара */}
            <section className={styles.fullScreenSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(/images/landing/2.png)' }}></div>
                <div className={styles.overlay}></div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleAltumar}`}>
                                История Альтумара
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                В мире, где океаны скрывают тайны прошлого, а суша окутана мифами, начинается история Великого путешествия. Альтумар, рожденный во времена Второго Тягуна, знал лишь глубины и легенды о суше. Но когда воды стихли, ему выпал шанс подняться на поверхность — туда, где реальность оказывается куда жестче сказок.
                            </Text>
                            <div className={styles.buttonWrapper}>
                                <Button 
                                    onClick={() => navigate('/comic')}
                                    className={styles.actionButton}
                                >
                                    Читать комикс
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Еще больше о сеттинге */}
            <section className={styles.fullScreenSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(/images/landing/3.png)' }}></div>
                <div className={styles.overlay}></div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleSetting}`}>
                                Еще Больше О Сеттинге
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                За пределами комикса мир Морской Реминисценции живёт своей насыщенной жизнью. В статьях вы найдете рассказы о вивернах, их анатомии, культуре, подводных кланах и многом другом, вместе с яркими иллюстрациями!
                            </Text>
                            <div className={styles.buttonWrapper}>
                                <Button 
                                    onClick={() => navigate('/articles')}
                                    className={styles.actionButton}
                                >
                                    К статьям
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Поддержите автора */}
            <section className={styles.fullScreenSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: 'url(/images/landing/4.png)' }}></div>
                <div className={styles.overlay}></div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <Text variant="h1" className={`${styles.sectionTitle} ${styles.titleSupport}`}>
                                Поддержите Автора!
                            </Text>
                            <Text variant="body" className={styles.paragraph}>
                                Вы можете поддержать автора, оформив подписку <span style={{ color: '#fd9dff' }}>на каналы</span> с эксклюзивными материалами: ранним доступом к комиксу, иллюстрациями, спидпейнтами. А для особой связи с миром, приобрести <span style={{ color: '#9dcbff' }}>адопт-виверну</span> — собственного персонажа, который станет вашим проводником в сеттинге!
                            </Text>
                        </div>
                    </div>
                    <div className={styles.supportCardsWrapper}>
                        <div className={styles.supportCards}>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/landing/group1.png" alt="Эксклюзив" />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        Эксклюзив
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/landing/group2.png" alt="Адопты" />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        Адопты
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.supportCard}>
                                <div className={styles.cardImageWrapper}>
                                    <img src="/images/landing/group3.png" alt="Донат" />
                                    <Text variant="h4" className={styles.cardLabel} color={'#99ECFF'}>
                                        Донат
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thankYouWrapper}>
                        <Text variant="body" className={styles.thankYouText} color={'#81a9d8'}>
                            Благодаря вашей поддержке я могу развивать мир, наполняя его новыми красками. Спасибо!
                        </Text>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    onClick={() => window.open('https://t.me/ZhurzhArt', '_blank')}
                                    className={styles.actionButton}
                                    imageSrc="/images/article/community/telegram.svg"
                                >
                                    Телеграм
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <Text variant="h4" className={styles.footerTitle}>Главная</Text>
                        <a href="/" className={styles.footerLink}>Морская Реминисценция</a>
                        <a href="/comic" className={styles.footerLink}>Читать комикс</a>
                        <a href="/comic/archive" className={styles.footerLink}>Архив страниц</a>
                        <a href="/about" className={styles.footerLink}>Об авторе проекта</a>
                        <a href="/materials" className={styles.footerLink}>Материалы</a>
                    </div>
                    <div className={styles.footerColumn}>
                        <Text variant="h4" className={styles.footerTitle}>О МИРЕ</Text>
                        <a href="/articles" className={styles.footerLink}>Статьи и миры</a>
                        <a href="/adopts" className={styles.footerLink}>Адопты</a>
                        <a href="/glossary" className={styles.footerLink}>Словарик</a>
                        <a href="/map" className={styles.footerLink}>Карта мира</a>
                    </div>
                    <div className={styles.footerColumn}>
                        <Text variant="h4" className={styles.footerTitle}>FAQ</Text>
                        <a href="/faq/comic" className={styles.footerLink}>Где искать комикс?</a>
                        <a href="/faq/wyvern" className={styles.footerLink}>Как получить виверну?</a>
                        <a href="/faq/thank" className={styles.footerLink}>Как поблагодарить?</a>
                    </div>
                    <div className={styles.footerColumn}>
                        <Text variant="h4" className={styles.footerTitle}>ФАН БАЗА</Text>
                        <a href="/fanbase/comic" className={styles.footerLink}>Весь комикс</a>
                        <a href="/fanbase/exclusive" className={styles.footerLink}>Эксклюзив</a>
                        <a href="/fanbase/worlds" className={styles.footerLink}>Миры</a>
                        <a href="/fanbase/wallpapers" className={styles.footerLink}>Обои</a>
                        <a href="/fanbase/donate" className={styles.footerLink}>Донат</a>
                    </div>
                </div>
                <Text variant="sign" className={styles.copyright}>
                    © Морская Реминисценция, 2025
                </Text>
            </footer>
        </div>
    );
}
