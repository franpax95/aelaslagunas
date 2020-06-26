import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Home from '../pages/Home';
import About from '../pages/About';
import Licenses from '../pages/Licenses';
import Contact from '../pages/Contact';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Header />
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path={["/licenses", "/licenses/:id"]} component={Licenses} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;