import { useNavigate } from 'react-router-dom';
import styles from '../../styles/pages/ArticlesPage.module.css';
import Text from '../common/Text.jsx';
import Button from '../common/Button.jsx';

export default function ArticlesPage() {
    const navigate = useNavigate();

    const articles = [
        {
            id: 'whoAreThey',
            title: 'ГЛУБОКОВОДНЫЕ ВИВЕРНЫ',
            description:
                'Общая характеристика, внешность, устройство жизни, обитание.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/who%20are%20they.png',
            path: '/articles/whoAreThey',
            textColor: '#94DFFF',
            titleGlow: '0 0 28px #0033ff',
            textAlign: 'left'
        },
        {
            id: 'physiology',
            title: 'ФИЗИОЛОГИЯ ВИВЕРН',
            description:
                'Строение тела, дыхательная система, органы чувств и психика.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/physiology.png',
            path: '/articles/physiology',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #FF0004',
            textAlign: 'right'
        },
        {
            id: 'reproduction',
            title: 'РАЗМНОЖЕНИЕ И СЕМЬЯ',
            description:
                'Поиск партнера, гнезда, рождение потомства, воспитание иерархий.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/reproductive.png',
            path: '/articles/reproduction',
            textColor: '#C3BDFF',
            titleGlow: '0 0 28px #3700FF',
            textAlign: 'left'
        },
        {
            id: 'names',
            title: 'ПРОИСХОЖДЕНИЕ ИМЕН ВИВЕРН',
            description:
                'Как виверны выбирают имя, и что оно значит для них и их культуры.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/names.png',
            path: '/articles/names',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #0051FF',
            textAlign: 'right'
        },
        {
            id: 'growth',
            title: 'ЭТАПЫ РОСТА И ВЗРОСЛЕНИЕ',
            description:
                'сколько живут виверны и что происходит на этапах взросления.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/growth.png',
            path: '/articles/growth',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #FF0004',
            textAlign: 'left'
        },
        {
            id: 'community',
            title: 'УСТРОЙСТВО ОБЩИН ВИВЕРН',
            description:
                'структура вивернового сообщества, законы и диалекты мира.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/communities.png',
            path: '/articles/community',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #0051FF',
            textAlign: 'right'
        },
        {
            id: 'oceanDangers',
            title: 'ОПАСНОСТИ ОКЕАНА',
            description: '[В РАЗРАБОТКЕ]',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/dangerous.png',
            path: '/articles/ocean-dangers',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #FF0004',
            textAlign: 'left'
        },
        {
            id: 'virpulis',
            title: 'ВИРПУЛИС И СЕКРЕТ ВИВЕРН',
            description: '[В РАЗРАБОТКЕ]',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/virpulis.png',
            path: '/articles/virpulis',
            textColor: '#E2D4C1',
            titleGlow: '0 0 28px #FF0004',
            textAlign: 'right'
        }
    ];

    const go = (path) => {
        navigate(path);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerGrid}>
                    <div className={styles.headerTextColumn}>
                        <Text variant={'h1'} children={'БОЛЬШЕ О МИРЕ'} className={styles.mainTitle}/>
                        <Text variant={'body'} className={styles.intro}>
                            За пределами комикса мир Морской Реминисценции живёт своей насыщенной жизнью. В статьях вы
                            найдете рассказы о вивернах, их анатомии, культуре, подводных кланах и многом другом,
                            вместе с яркими иллюстрациями!
                        </Text>
                    </div>
                </div>
            </div>

            <ul className={styles.list}>
                {articles.map((article) => (
                    <li key={article.id} className={styles.listItem}>
                        <article
                            className={styles.card}
                            style={{
                                '--article-text-color': article.textColor,
                                '--article-title-glow': article.titleGlow
                            }}
                            tabIndex={0}
                            onClick={() => go(article.path)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    go(article.path);
                                }
                            }}
                        >
                            <div className={styles.cardMedia}>
                                <img
                                    src={article.image}
                                    alt=""
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardContent}>
                                    <div
                                        className={
                                            article.textAlign === 'right'
                                                ? styles.cardContentCellRight
                                                : styles.cardContentCellLeft
                                        }
                                    >
                                        <Text variant={'h2'} className={styles.cardTitle}>
                                            {article.title}
                                        </Text>
                                        <Text variant={'body'} className={styles.cardDescription}>
                                            {article.description}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>

            <div className={styles.footer}>
                <div className={styles.headerGrid}>
                    <div className={styles.headerTextColumn}>
                        <Text variant={'h2'} className={styles.ctaTitle}>
                            Ускорьте выход статей
                        </Text>
                        <Text variant={'body'} className={styles.ctaSub}>
                            Вы можете помочь мне ускорить выход статей по миру, подписавшись на мой Патреон. Даже
                            необязательно оформлять подписку — мне уже важна ваша поддержка и присутствие!
                        </Text>
                        <div className={styles.ctaButtonWrap}>
                            <Button
                                type="button"
                                onClick={() =>
                                    window.open(
                                        'https://t.me/ZhurzhArt',
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                Подписаться
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
