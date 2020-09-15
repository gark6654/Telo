import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToolBox from './components/ToolBox';
import AddPage from './components/Pages/AddItem';
import Category from './components/Pages/Category';
import './App.css';

function App() {
    return (
        <Router>
            <main className="App container">
                <header>
                    <h1>Բարի Գալուստ</h1>
                </header>
                <div className="content">
                    <Switch>
                        <Route path="/Category">
                            <Category />
                        </Route>
                        <Route path="/AddItem">
                            <AddPage />
                        </Route>
                        <Route path="/">
                            <ToolBox />
                        </Route>
                    </Switch>
                </div>
            </main>
        </Router>
    );
}

export default App;
