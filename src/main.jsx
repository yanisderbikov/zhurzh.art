/* --- обрабатываем redirect с 404.html --- */
if (sessionStorage.getItem('spaRedirect')) {
    const redirectPath = sessionStorage.getItem('spaRedirect');
    sessionStorage.removeItem('spaRedirect');
    window.history.replaceState(null, '', redirectPath);
}

import React    from 'react';
import ReactDOM from 'react-dom/client';

import App   from './App.jsx';
import './index.css';          // один-единственный глобальный CSS

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
