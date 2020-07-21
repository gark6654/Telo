import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <main>
            <Router>
                <Header />
                <Content />
                <Footer />
            </Router>
        </main>
    );
}

export default App;