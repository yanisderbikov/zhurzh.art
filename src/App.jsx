import Text from "./components/common/Text.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import ArticleCommunity from "./components/pages/articles/ArticleCommunity.jsx";
import PageNotFound from "./components/pages/PageNotFound.jsx";

export default function App({}) {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/articles/community" element={<ArticleCommunity/>}/>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </>
    )
}