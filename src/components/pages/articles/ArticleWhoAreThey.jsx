import useIsMobile from '../../../hooks/useIsMobile.js';
import ArticleWhoAreTheyDesktop from './whoAreThey/desktop/ArticleWhoAreTheyDesktop.jsx';
import ArticleWhoAreTheyMobile from './whoAreThey/mobile/ArticleWhoAreTheyMobile.jsx';

export default function ArticleWhoAreThey() {
    const isMobile = useIsMobile();
    return isMobile ? <ArticleWhoAreTheyMobile /> : <ArticleWhoAreTheyDesktop />;
}
