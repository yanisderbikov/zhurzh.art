import {
    communityHeroBackground,
    communityMockup,
    getCommunityPicture,
} from '../../../../../content/community.assets.js';
import styles from '../../../../../styles/pages/article/ArticleCommunity.module.css';
import ArticleCommunityView from '../ArticleCommunityView.jsx';

export default function ArticleCommunityMobile() {
    const getImage = (n) => getCommunityPicture('mobile', n);
    return (
        <ArticleCommunityView
            styles={styles}
            getImage={getImage}
            heroBackgroundUrl={communityHeroBackground.mobile}
            mockupSrc={communityMockup.mobile}
        />
    );
}
