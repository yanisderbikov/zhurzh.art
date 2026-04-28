import { getWhoAreTheyPicture } from '../../../../../content/whoAreThey.assets.js';
import styles from '../../../../../styles/pages/article/ArticleWhoAreThey.module.css';
import ArticleWhoAreTheyView from '../ArticleWhoAreTheyView.jsx';

export default function ArticleWhoAreTheyMobile() {
    const getImage = (n) => getWhoAreTheyPicture('mobile', n);
    return <ArticleWhoAreTheyView styles={styles} getImage={getImage} />;
}
