import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../../styles/pages/comic/ComicViewer.module.css';
import Text from '../../common/Text.jsx';
import { 
    getPageInfo, 
    findNextPublicPage, 
    findPrevPublicPage, 
    findLastPublicPage 
} from '../../../services/comicService.js';

export default function ComicViewer() {
    const { pageId } = useParams();
    const navigate = useNavigate();
    const [pageInfo, setPageInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        loadPage();
    }, [pageId]);

    useEffect(() => {
        // Защита от копирования и зума
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        const handleDragStart = (e) => {
            e.preventDefault();
            return false;
        };

        const handleSelectStart = (e) => {
            e.preventDefault();
            return false;
        };

        const handleWheel = (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e) => {
            // Блокируем Ctrl/Cmd + и Ctrl/Cmd - для зума
            if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
                e.preventDefault();
            }
        };

        if (imageRef.current) {
            imageRef.current.addEventListener('contextmenu', handleContextMenu);
            imageRef.current.addEventListener('dragstart', handleDragStart);
            imageRef.current.addEventListener('selectstart', handleSelectStart);
            imageRef.current.style.userSelect = 'none';
            imageRef.current.style.webkitUserSelect = 'none';
            imageRef.current.style.pointerEvents = 'auto';
        }

        if (containerRef.current) {
            containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener('contextmenu', handleContextMenu);
                imageRef.current.removeEventListener('dragstart', handleDragStart);
                imageRef.current.removeEventListener('selectstart', handleSelectStart);
            }
            if (containerRef.current) {
                containerRef.current.removeEventListener('wheel', handleWheel);
            }
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [pageInfo]);

    const loadPage = async () => {
        try {
            setLoading(true);
            const pageIndex = parseInt(pageId, 10);
            const info = await getPageInfo(pageIndex);
            
            // Проверяем доступность страницы
            if (!info.public) {
                navigate('/explore-more');
                return;
            }
            
            setPageInfo(info);
            
            // Проверяем наличие следующей и предыдущей публичных страниц
            const nextPage = await findNextPublicPage(pageIndex);
            const prevPage = await findPrevPublicPage(pageIndex);
            
            setHasNextPage(nextPage !== null);
            setHasPrevPage(prevPage !== null);
        } catch (error) {
            console.error('Ошибка загрузки страницы:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNavigation = async (direction) => {
        const currentPage = parseInt(pageId, 10);
        let newPage;
        
        if (direction === 'first') {
            newPage = 1;
        } else if (direction === 'prev') {
            // Ищем предыдущую публичную страницу
            const prevPage = await findPrevPublicPage(currentPage);
            if (prevPage === null) {
                // Если предыдущей публичной страницы нет, остаемся на текущей
                return;
            }
            newPage = prevPage;
        } else if (direction === 'next') {
            // Ищем следующую публичную страницу
            const nextPage = await findNextPublicPage(currentPage);
            if (nextPage === null) {
                // Если следующей публичной страницы нет, переходим на explore-more
                navigate('/explore-more');
                return;
            }
            newPage = nextPage;
        } else if (direction === 'last') {
            // Находим последнюю публичную страницу
            newPage = await findLastPublicPage();
        }
        
        navigate(`/comic/${newPage}`);
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

    if (!pageInfo) {
        return null;
    }

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.container}>
                <Text variant="h1" className={styles.comicTitle} color="#92c5ff">
                    ИСТОРИЯ АЛЬТУМАРА
                </Text>
                
                <div className={styles.comicFrame}>
                    <img
                        ref={imageRef}
                        src={pageInfo.imageUrl}
                        alt={`Страница ${pageInfo.index}`}
                        className={styles.comicImage}
                        draggable="false"
                        onError={(e) => {
                            e.target.src = '/images/logo.png'; // Fallback изображение
                        }}
                    />
                </div>

                <Text variant="body" className={styles.pageNumber} color="#92c5ff">
                    #{pageInfo.index}
                </Text>

                <nav className={styles.navigation}>
                    <button
                        className={styles.navButton}
                        onClick={() => handleNavigation('first')}
                    >
                        <Text variant="body" color="#92c5ff">В НАЧАЛО</Text>
                    </button>
                    <span className={styles.navSeparator}>|</span>
                    <button
                        className={styles.navButton}
                        onClick={() => handleNavigation('prev')}
                        disabled={!hasPrevPage}
                    >
                        <Text variant="body" color="#92c5ff">НАЗАД</Text>
                    </button>
                    <span className={styles.navSeparator}>|</span>
                    <button
                        className={styles.navButton}
                        onClick={() => navigate('/comic/archive')}
                    >
                        <Text variant="body" color="#92c5ff">АРХИВ</Text>
                    </button>
                    <span className={styles.navSeparator}>|</span>
                    <button
                        className={styles.navButton}
                        onClick={() => handleNavigation('next')}
                    >
                        <Text variant="body" color="#92c5ff">ДАЛЬШЕ</Text>
                    </button>
                    <span className={styles.navSeparator}>|</span>
                    <button
                        className={styles.navButton}
                        onClick={() => handleNavigation('last')}
                    >
                        <Text variant="body" color="#92c5ff">В КОНЕЦ</Text>
                    </button>
                </nav>
            </div>
        </div>
    );
}
