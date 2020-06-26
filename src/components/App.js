import React, { useRef, useEffect } from 'react';
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
                    {/* <Route exact path="/permisos/ciclomotor" component={Permisos_AM} />
                    <Route exact path="/permisos/moto" component={Permisos_A} />
                    <Route exact path="/permisos/moto125" component={Permisos_A1} />
                    <Route exact path="/permisos/moto500" component={Permisos_A2} />
                    <Route exact path="/permisos/camion" component={Permisos_C} />
                    <Route exact path="/contacto" component={Contacto} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;