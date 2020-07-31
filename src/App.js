import React, { useEffect, useState } from 'react';
import Text from './SiteText.json';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const SiteText = React.createContext(null);
const changeLang = React.createContext(null);
const AddToCart = React.createContext(null);

function App() {
    const [lang, setLang] = useState('EN'); // Default language is English. 
    const [sortedText, setSortedText] = useState(Text.en); // Default language is English. 

    // Get language from localStorage and setup site language.
    useEffect(() => {
        localStorage.getItem('lang') ? setLang(localStorage.getItem('lang'))
            : localStorage.setItem('lang', lang);

        if (lang === 'ՀԱՅ') {
            setSortedText(Text.am);
        }
        else if (lang === 'РУС') {
            setSortedText(Text.ru);
        }
        else {
            setSortedText(Text.en);
        }
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
            <Router>
                <SiteText.Provider value={sortedText.header}>
                    <changeLang.Provider value={changeLanguage}>
                        <Header />
                    </changeLang.Provider>
                </SiteText.Provider>
                <SiteText.Provider value={sortedText.content}>
                    <AddToCart.Provider value={ToCart}>
                        <Content />
                    </AddToCart.Provider>
                </SiteText.Provider>
                <SiteText.Provider value={sortedText.footer}>
                    <Footer />
                </SiteText.Provider>
            </Router>
        </main>
    );
}

export { SiteText };
export { changeLang };
export { AddToCart };
export default App;