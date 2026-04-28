import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/pages/ArticlesPage.module.css';
import Text from '../../common/Text.jsx';
import Button from '../../common/Button.jsx';
import { useLocale } from '../../../context/LocaleContext.jsx';
import { articlesListing } from '../../../content/articlesListing.js';

export default function ArticlesPageDesktop() {
    const navigate = useNavigate();
    const { localizePath } = useLocale();

    const go = (path) => {
        navigate(localizePath(path));
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerGrid}>
                    <div className={styles.headerTextColumn}>
                        <Text variant={'h1'} children={'БОЛЬШЕ О МИРЕ'} className={styles.mainTitle} />
                        <Text variant={'body'} className={styles.intro}>
                            За пределами комикса мир Морской Реминисценции живёт своей насыщенной жизнью. В статьях вы
                            найдете рассказы о вивернах, их анатомии, культуре, подводных кланах и многом другом,
                            вместе с яркими иллюстрациями!
                        </Text>
                    </div>
                </div>
            </div>

            <ul className={styles.list}>
                {articlesListing.map((article) => (
                    <li key={article.id} className={styles.listItem}>
                        <article
                            className={styles.card}
                            style={{
                                '--article-text-color': article.textColor,
                                '--article-title-glow': article.titleGlow,
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
                                    window.open('https://t.me/ZhurzhArt', '_blank', 'noopener,noreferrer')
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
