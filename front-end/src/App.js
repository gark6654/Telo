import React, { useEffect, useState } from 'react';
import Text from './SiteText.json';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

// Global values...
const SiteText = React.createContext(null); // Site Text sorted from selected language.
const SiteProducts = React.createContext(null); // Products.
const BasketItems = React.createContext(null); // Basket items.

// Functions that are dispatched through the context.
const changeLang = React.createContext(null); // Change language.
const ToBasket = React.createContext(null); // Add item to basket.
const ChangeBasket = React.createContext(null); // Change item count in basket.
const RemoveItem = React.createContext(null); // Remove item from bsaket.
const ClearBasket = React.createContext(); // Remove all basket items.

function App(props) {
    const [lang, setLang] = useState('EN'); // Default language is English. 
    const [sortedText, setSortedText] = useState(Text.en); // Text is sorted to English by default. 

    // Already filtred product for send's to content.
    const [shopProducts, setShopProducts] = useState([]);
    const [basketItems, setBasketItems] = useState([]); // Basket items for buy. :) :) :)

    // Setup products and basket.
    useEffect(() => {
        // Get products from server.
        (
            function getProductsFromServer() {
                fetch('http://localhost:5000/items')
                    .then(response => response.json())
                    .then(data => setShopProducts([...data]))
                    .catch(error => console.error(error));
            }
        )();
        // Create basket session storage or basket get from it.
        (
            function setupBasketStorage() {
                const sessionBasket = sessionStorage.getItem('basket');
                if (sessionBasket) {
                    setBasketItems(JSON.parse(sessionStorage.getItem('basket')));
                }
                else {
                    sessionStorage.setItem('basket', JSON.stringify([]));
                }
            }
        )();
    }, [props]);

    // Get language from localStorage and setup site language.
    useEffect(() => {
        localStorage.getItem('lang') ? setLang(localStorage.getItem('lang'))
            // Else   
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

    // Remove all basket items.
    function clearBasket() {
        setBasketItems([]);
    }

    return (
        <main>
            <SiteText.Provider value={sortedText}>
                <Router>
                    <BasketItems.Provider value={basketItems}>
                        <changeLang.Provider value={changeLanguage}>
                            <Header basketLength={basketItems ? basketItems.length : 0} />
                        </changeLang.Provider>
                        <SiteProducts.Provider value={shopProducts}>
                            <ToBasket.Provider value={ToCart}>
                                <ChangeBasket.Provider value={changeCount}>
                                    <RemoveItem.Provider value={removeItem}>
                                        <ClearBasket.Provider value={clearBasket}>
                                            <Content />
                                        </ClearBasket.Provider>
                                    </RemoveItem.Provider>
                                </ChangeBasket.Provider>
                            </ToBasket.Provider>
                        </SiteProducts.Provider>
                        <Footer />
                    </BasketItems.Provider>
                </Router>
            </SiteText.Provider>
        </main>
    );
}

// Functions was created from context.
export {
    SiteProducts, 
    BasketItems, 
    SiteText, 
    changeLang, 
    ToBasket, 
    ChangeBasket, 
    RemoveItem,
    ClearBasket
};
export default App;