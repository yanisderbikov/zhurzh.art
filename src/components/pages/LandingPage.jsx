import styles from '../../styles/pages/LandingPage.module.css';
import Text from "../common/Text.jsx";

export default function LandingPage() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.topBlock}>
                    <Text children={'Глубоководные виверны'} variant={'h1'}/>
                    <Text children={'Устройство общин'} variant={'h2'} color={'rgba(255,255,255,0.7)'}/>
                </div>
                <div className={styles.bottomBlock}>
                    <button className={styles.cta}>Читать</button>
                    <div className={styles.bottomFooter}>
                        <Text children={'Обновление от 14 июля 2025'} color={'rgba(255,255,255,0.3)'}/>
                    </div>
                </div>
            </div>

        </section>
    );
}
