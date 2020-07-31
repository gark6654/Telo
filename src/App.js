import React, { useEffect, useState } from 'react';
import Text from './SiteText.json';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const SiteText = React.createContext(null); // Site Text for sorting from selected language.
const changeLang = React.createContext(null); // Change language function send's by context.
const ToBasket = React.createContext(null);

function App(props) {
    const [lang, setLang] = useState('EN'); // Default language is English. 
    const [sortedText, setSortedText] = useState(Text.en); // Default language is English. 
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        sessionStorage.setItem('basket', JSON.stringify(basketItems));
    }, [basketItems]);

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
    }, [lang]);

    // Setup basket storage.
    useEffect(() => {
        const sessionBasket = sessionStorage.getItem('basket');
        if (sessionBasket) {
            setBasketItems(JSON.parse(sessionStorage.getItem('basket')));
        }
        else {
            sessionStorage.setItem('basket', JSON.stringify([]));
        }
    }, [props]);

    // Change site language from LangSelector.
    function changeLanguage(lang) {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    // Add product to Basket.
    function ToCart(product) {
        setBasketItems([...basketItems, product]);
    }

    return (
        <main>
            <Router>
                <SiteText.Provider value={sortedText.header}>
                    <changeLang.Provider value={changeLanguage}>
                        <Header basketLength={basketItems ? basketItems.length : 0} />
                    </changeLang.Provider>
                </SiteText.Provider>
                <SiteText.Provider value={sortedText.content}>
                    <ToBasket.Provider value={ToCart}>
                        <Content />
                    </ToBasket.Provider>
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
export { ToBasket };
export default App;