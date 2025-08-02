import styles from '../../styles/pages/ArticlesPage.module.css';
import Text from "../common/Text.jsx";
import Article from "../common/Article.jsx";

export default function ArticlesPage() {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {[...Array(4)].map((_, index) => (
                    <Article key={index} style={{ marginBottom: '20px' }}>
                        <div>
                            <Text children={`Статья ${index + 1}`} variant={'p'}/>
                        </div>
                    </Article>
                ))}
            </div>
        </section>
    );
}
