import styles from '../../styles/pages/LandingPage.module.css';
import Text from "../common/Text.jsx";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.topBlock}>
                    <Text children={'Глубоководные виверны'} variant={'h1'}/>
                    <Text children={'Устройство общин'} variant={'h2'} color={'rgba(255,255,255,0.7)'}/>
                </div>
                <div className={styles.bottomBlock}>

                    <Text 
                        children={'Читать'} 
                        className={styles.buttonSubscribe} 
                        onClick={() => {navigate('/articles/community')}} 
                        variant='button'
                        />

                    <div className={styles.bottomFooter}>
                        <Text children={'Обновление от 14 июля 2025'} variant={'sign'} color={'rgba(255,255,255,0.3)'}/>
                    </div>
                </div>
            </div>

        </section>
    );
}
