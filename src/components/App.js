import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import Contact from '../pages/Contact';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    {/* <Route exact path="/quienessomos" component={QuienesSomos} />
                    <Route exact path="/permisos" component={Permisos} />
                    <Route exact path="/permisos/coche" component={Permisos_B} />
                    <Route exact path="/permisos/ciclomotor" component={Permisos_AM} />
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