import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/pages/comic/ComicPage.module.css';
import Text from '../../common/Text.jsx';
import Button from '../../common/Button.jsx';

export default function ComicPage() {
    const navigate = useNavigate();

    const handleOpenArchive = () => {
        navigate('/comic/archive');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Text variant="h1" className={styles.title} color="#92c5ff">
                        ИСТОРИЯ АЛЬТУМАРА
                    </Text>
                    <Text variant="body" className={styles.description} color="#ffffff">
                        В мире, где океаны скрывают тайны прошлого, а суша окутана мифами, начинается история Великого путешествия.
                    </Text>
                    <div className={styles.buttonWrapper}>
                        <Button 
                            onClick={handleOpenArchive}
                            className={styles.archiveButton}
                        >
                            Открыть архив
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
