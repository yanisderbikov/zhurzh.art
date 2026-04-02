import { useNavigate } from 'react-router-dom';
import styles from '../../styles/pages/ArticlesPage.module.css';
import Text from '../common/Text.jsx';

export default function ArticlesPage() {
    const navigate = useNavigate();

    const articles = [
        {
            id: 'whoAreThey',
            title: 'ГЛУБОКОВОДНЫЕ ВИВЕРНЫ',
            description:
                'Общая характеристика, внешность, устройство жизни, общины.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/1.png',
            path: '/articles/whoAreThey'
        },
        {
            id: 'community',
            title: 'УСТРОЙСТВО ОБЩИН',
            description:
                'Понятие взаимоотношений складывается у виверны с детства, что во многом определяет её дальнейшую роль в обществе.',
            image: 'https://storage.yandexcloud.net/zhurzh/articles/main/2.png',
            path: '/articles/community'
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
                                    <Text variant={'h2'} className={styles.cardTitle}>
                                        {article.title}
                                    </Text>
                                    <Text variant={'body'} className={styles.cardDescription}>
                                        {article.description}
                                    </Text>
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}
