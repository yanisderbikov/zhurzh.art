import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../styles/pages/comic/ComicArchive.module.css';
import Text from '../../common/Text.jsx';
import Button from '../../common/Button.jsx';
import { getAllPagesInfo } from '../../../services/comicService.js';

export default function ComicArchive() {
    const navigate = useNavigate();
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPages();
    }, []);

    const loadPages = async () => {
        try {
            setLoading(true);
            const pagesData = await getAllPagesInfo();
            setPages(pagesData);
        } catch (error) {
            console.error('Ошибка загрузки страниц:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePageClick = (pageIndex, isPublic) => {
        if (!isPublic) {
            navigate('/explore-more');
        } else {
            navigate(`/comic/${pageIndex}`);
        }
    };

    if (loading) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Text variant="body" color="#92c5ff">Загрузка...</Text>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Text variant="h1" className={styles.title} color="#92c5ff">
                    АРХИВ
                </Text>
                <Text variant="body" className={styles.description} color="#ffffff">
                    Читайте комикс в своём ритме и возвращайтесь к нему в любой момент. Для доступа ко всем страницам, присоединяйтесь к каналу SeaRem!
                </Text>
                
                <div className={styles.pagesGrid}>
                    {pages.map((page) => (
                        <button
                            key={page.index}
                            className={`${styles.pageButton} ${
                                page.public ? styles.public : styles.private
                            }`}
                            onClick={() => handlePageClick(page.index, page.public)}
                        >
                            <Text variant="body" className={styles.pageNumber}>
                                {page.index}
                            </Text>
                        </button>
                    ))}
                </div>

                <div className={styles.joinButtonWrapper}>
                    <Button
                        onClick={() => window.open('https://t.me/ZhurzhArt', '_blank')}
                        className={styles.joinButton}
                    >
                        Присоединиться
                    </Button>
                </div>
            </div>
        </div>
    );
}
