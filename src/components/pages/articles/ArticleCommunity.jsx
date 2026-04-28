import useIsMobile from '../../../hooks/useIsMobile.js';
import ArticleCommunityDesktop from './community/desktop/ArticleCommunityDesktop.jsx';
import ArticleCommunityMobile from './community/mobile/ArticleCommunityMobile.jsx';

export default function ArticleCommunity() {
    const isMobile = useIsMobile();
    return isMobile ? <ArticleCommunityMobile /> : <ArticleCommunityDesktop />;
}
