import { useLocation, useNavigate } from "react-router-dom";
import Text from "../common/Text.jsx";
import Button from "../common/Button.jsx";
import styles from "../../styles/pages/PageNotFound.module.css";

export default function PageNotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    const isRu = location.pathname.startsWith("/ru");

    const content = isRu
        ? {
            code: "404",
            title: "Страница не найдена",
            description: "Похоже, ссылка устарела или страница была перемещена.",
            primaryAction: "На главную",
            secondaryAction: "К статьям",
            homePath: "/ru",
            articlesPath: "/ru/articles",
        }
        : {
            code: "404",
            title: "Page not found",
            description: "The link may be outdated or the page has been moved.",
            primaryAction: "Back to home",
            secondaryAction: "Go to articles",
            homePath: "/",
            articlesPath: "/articles",
        };

    return (
        <main className={styles.wrapper}>
            <section className={styles.card}>
                <Text variant="h1" className={styles.code}>
                    {content.code}
                </Text>
                <Text variant="h2" className={styles.title}>
                    {content.title}
                </Text>
                <Text variant="body" className={styles.description}>
                    {content.description}
                </Text>
                <div className={styles.actions}>
                    <Button onClick={() => navigate(content.homePath)}>
                        {content.primaryAction}
                    </Button>
                    <Button
                        className={styles.secondary}
                        onClick={() => navigate(content.articlesPath)}
                    >
                        {content.secondaryAction}
                    </Button>
                </div>
            </section>
        </main>
    );
}