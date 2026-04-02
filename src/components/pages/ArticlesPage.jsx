import { useNavigate } from 'react-router-dom';
import styles from '../../styles/pages/ArticlesPage.module.css';
import Text from "../common/Text.jsx";

export default function ArticlesPage() {
    const navigate = useNavigate();

    const articles = [
        {
            id: 'whoAreThey',
            title: 'ГЛУБОКОВОДНЫЕ ВИВЕРНЫ',
            description: 'Общая характеристика, внешность, устройство жизни, общины.',
            image: '/images/article/preview/preview 1.png',
            path: '/articles/whoAreThey',
            align: 'left'
        },
        {
            id: 'community',
            title: 'УСТРОЙСТВО ОБЩИН',
            description: 'Понятие взаимоотношений складывается у виверны с детства, что во многом определяет её дальнейшую роль в обществе.',
            image: '/images/article/preview/preview 2.png',
            path: '/articles/community',
            align: 'right'
        }
    ];

    const handleArticleClick = (path) => {
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
            <div className={styles.container}>
                {articles.map((article) => (
                    <div 
                        key={article.id} 
                        className={`${styles.articleCard} ${styles[article.align]}`}
                        onClick={() => handleArticleClick(article.path)}
                    >
                        <div className={styles.articleContent}>
                            <Text variant={'h2'} children={article.title} className={styles.articleTitle}/>
                            <Text 
                                variant={'p'} 
                                children={article.description}
                                className={styles.articleDescription}
                            />
                        </div>
                        {article.image && (
                            <div className={styles.articleImage}>
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className={styles.previewImage}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
