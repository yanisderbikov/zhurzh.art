import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import LandingPage       from './components/pages/LandingPage.jsx';
import ArticleCommunity  from './components/pages/articles/ArticleCommunity.jsx';
import PageNotFound      from './components/pages/PageNotFound.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"                   element={<LandingPage />} />
                <Route path="/articles/community" element={<ArticleCommunity />} />
                <Route path="*"                   element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}
