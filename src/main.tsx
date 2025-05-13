import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.tsx';
import Modal from 'react-modal';

const firebaseConfig = {
    apiKey: 'AIzaSyDdw2cUXepaTb3NmbS0FekBx0s1qOwpK6c',
    authDomain: 'events-planning-app.firebaseapp.com',
    projectId: 'events-planning-app',
    storageBucket: 'events-planning-app.firebasestorage.app',
    messagingSenderId: '598504432431',
    appId: '1:598504432431:web:9fa6f9d092a34f199ef7da',
    measurementId: 'G-CJH5JSNQ9E',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Modal.setAppElement('#root');
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
