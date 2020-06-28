import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Home from '../pages/Home';
import About from '../pages/About';
import Licenses from '../pages/Licenses';
import Contact from '../pages/Contact';

import './App.css';


const AbsoluteWrapper = ({ children }) => (
    <div style={{ position: 'absolute', width: '100%' }}>
        {children}
    </div>
);

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
} 

const App = () => {
    const location= useLocation();

    // const transitions = useTransition(location, location => location.pathname, {
    //     from: { opacity: 0, transform: 'translate3d(100%, 100%, 0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    //     leave: { opacity: 0, transform: 'translate3d(-50%, -50%, 0)' }
    // });

    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });



    return (<>
        <Navbar />
        <Header />
        <div className="App">
            <ScrollToTop />
            {transitions.map(({ item: location, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={location}>
                        <Route exact path={["/", "/home"]}>
                            <AbsoluteWrapper><Home /></AbsoluteWrapper>
                        </Route>
                        <Route exact path="/about">
                            <AbsoluteWrapper><About /></AbsoluteWrapper>
                        </Route>
                        <Route exact path={["/licenses", "/licenses/:id"]}>
                            <AbsoluteWrapper><Licenses /></AbsoluteWrapper>
                        </Route>
                        <Route exact path="/contact">
                            <AbsoluteWrapper><Contact /></AbsoluteWrapper>
                        </Route>
                    </Switch>
                </animated.div>
            ))}
        </div>
    </>);
}

export default App;