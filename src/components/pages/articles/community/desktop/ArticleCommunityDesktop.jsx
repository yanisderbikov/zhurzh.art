import {
    communityHeroBackground,
    communityMockup,
    getCommunityPicture,
} from '../../../../../content/community.assets.js';
import styles from '../../../../../styles/pages/article/ArticleCommunity.module.css';
import ArticleCommunityView from '../ArticleCommunityView.jsx';

export default function ArticleCommunityDesktop() {
    const getImage = (n) => getCommunityPicture('desktop', n);
    return (
        <ArticleCommunityView
            styles={styles}
            getImage={getImage}
            heroBackgroundUrl={communityHeroBackground.desktop}
            mockupSrc={communityMockup.desktop}
        />
    );
}
