import React, { useEffect, useState } from 'react';
import Text from './SiteText.json';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const SiteText = React.createContext(null); // Site Text sorted from selected language.
const BasketItems = React.createContext(null); // Basket items.

// Functions that are dispatched through the context.
const changeLang = React.createContext(null); // Change language.
const ToBasket = React.createContext(null); // Add item basket.
const ChangeBasket = React.createContext(null); // Change item count in basket.
const RemoveItem = React.createContext(null); // Remove item from bsaket.

function App(props) {
    const [lang, setLang] = useState('EN'); // Default language is English. 
    const [sortedText, setSortedText] = useState(Text.en); // Default language is English. 
    const [basketItems, setBasketItems] = useState([]);

    // Setup basket storage and global configs.
    useEffect(() => {
        const sessionBasket = sessionStorage.getItem('basket');
        if (sessionBasket) {
            setBasketItems(JSON.parse(sessionStorage.getItem('basket')));
        }
        else {
            sessionStorage.setItem('basket', JSON.stringify([]));
        }
    }, [props]);

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

    // Update basket session storage on basketItems update.
    useEffect(() => {
        sessionStorage.setItem('basket', JSON.stringify(basketItems));
    }, [basketItems]);

    // Change site language from LangSelector.
    function changeLanguage(lang) {
        setLang(lang);
        localStorage.setItem('lang', lang);
    }

    // Add product to Basket.
    function ToCart(product) {
        setBasketItems([...basketItems, product]);
    }

    // Change item count in basket.
    function changeCount(productId, value) {
        const itemsForChange = basketItems;
        itemsForChange[productId].count = value;
        itemsForChange[productId].payPrice = value * itemsForChange[productId].product.price;

        setBasketItems([...itemsForChange]);
    }

    // Remove item from basket.
    function removeItem(productId) {
        const itemsForChange = basketItems;
        itemsForChange.splice(productId, 1);

        setBasketItems([...itemsForChange]);
    }

    return (
        <main>
            <Router>
                <BasketItems.Provider value={basketItems}>
                    <SiteText.Provider value={sortedText.header}>
                        <changeLang.Provider value={changeLanguage}>

                            <Header basketLength={basketItems ? basketItems.length : 0} />
                        </changeLang.Provider>
                    </SiteText.Provider>
                    <SiteText.Provider value={sortedText.content}>
                        <ToBasket.Provider value={ToCart}>
                            <ChangeBasket.Provider value={changeCount}>
                                <RemoveItem.Provider value={removeItem}>
                                    <Content />
                                </RemoveItem.Provider>
                            </ChangeBasket.Provider>
                        </ToBasket.Provider>
                    </SiteText.Provider>
                    <SiteText.Provider value={sortedText.footer}>
                        <Footer />
                    </SiteText.Provider>
                </BasketItems.Provider>
            </Router>
        </main>
    );
}

// Functions was created from context.
export {
    BasketItems, SiteText, changeLang, ToBasket, ChangeBasket, RemoveItem
};
export default App;