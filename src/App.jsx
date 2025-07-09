import Text from "./components/common/Text.jsx";
import LandingPage from "./components/pages/LandingPage.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

export default function App({}) {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                </Routes>
            </Router>
        </>
    )
}