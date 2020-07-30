import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const changeLang = React.createContext(null);
const AddToCart = React.createContext(null);

function App() {
    const [lang, setLang] = useState('en'); // Default language is English. 

    // If session storage language is empty create it.
    useEffect(() => {
        localStorage.getItem('lang') ? setLang(localStorage.getItem('lang')) 
        : localStorage.setItem('lang', lang);
    });

    // Chamge site language from LangSelector.
    function changeLanguage(lang) {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    // Add product to cart
    function ToCart(product) {
        console.log(product);
    }

    return (
        <main>
            {lang}
            <Router>
                <changeLang.Provider value={changeLanguage}>
                    <Header />
                </changeLang.Provider>
                <AddToCart.Provider value={ToCart}>
                    <Content />
                </AddToCart.Provider>
                <Footer />
            </Router>
        </main>
    );
}

export { changeLang }
export { AddToCart };
export default App;