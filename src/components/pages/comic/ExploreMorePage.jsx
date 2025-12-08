import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/pages/comic/ExploreMorePage.module.css';
import Text from '../../common/Text.jsx';
import Button from '../../common/Button.jsx';

export default function ExploreMorePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Text variant="h1" className={styles.title} color="#92c5ff">
                    ТГ и Patreon
                </Text>
                <Text variant="body" className={styles.description} color="#ffffff">
                    Для доступа к этой странице и другим эксклюзивным материалам, присоединяйтесь к нашим каналам!
                </Text>
                <div className={styles.buttonWrapper}>
                    <Button
                        onClick={() => window.open('https://t.me/ZhurzhArt', '_blank')}
                        className={styles.button}
                    >
                        Присоединиться к Telegram
                    </Button>
                    <Button
                        onClick={() => navigate('/comic/archive')}
                        className={styles.button}
                    >
                        Вернуться в архив
                    </Button>
                </div>
            </div>
        </div>
    );
}
