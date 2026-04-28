import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { LocaleProvider } from './context/LocaleContext.jsx';
import Header from './components/common/Header.jsx';
import LandingPage from './components/pages/LandingPage.jsx';
import ArticlesPage from './components/pages/ArticlesPage.jsx';
import ArticleCommunity from './components/pages/articles/ArticleCommunity.jsx';
import ArticleWhoAreThey from './components/pages/articles/ArticleWhoAreThey.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';

export default function App() {
    return (
        <LocaleProvider>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/articles" element={<ArticlesPage/>}/>
                <Route path="/articles/community" element={<ArticleCommunity/>}/>
                <Route path="/articles/whoAreThey" element={<ArticleWhoAreThey/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Router>
        </LocaleProvider>
    );
}
