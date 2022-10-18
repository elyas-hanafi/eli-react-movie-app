import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ReactRoutes from './config/ReactRoutes';
const App = () => {
    return (
        <div>
            <Header />
            <ReactRoutes />
            <Footer />
        </div>
    );
}

export default App;
