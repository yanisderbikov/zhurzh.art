import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


if (sessionStorage.redirect) {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    window.history.replaceState(null, '', redirect);
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

