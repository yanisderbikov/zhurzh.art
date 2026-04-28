import useIsMobile from '../../hooks/useIsMobile.js';
import ArticlesPageDesktop from './articles/ArticlesPageDesktop.jsx';
import ArticlesPageMobile from './articles/ArticlesPageMobile.jsx';

export default function ArticlesPage() {
    const isMobile = useIsMobile();
    return isMobile ? <ArticlesPageMobile /> : <ArticlesPageDesktop />;
}
