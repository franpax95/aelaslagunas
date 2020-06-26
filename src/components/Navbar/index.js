import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { MdLanguage } from "react-icons/md";

import { Navbar as EspNavbarTexts } from '../../lang/spanish';
import { Navbar as EngNavbarTexts } from '../../lang/english';

import './Navbar.css';

const Navbar = () => {
    const [state, setState] = useContext(Context);
    const [navbarTexts, setNavbarTexts] = useState(
        (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
    );

    useEffect(() => {
        setNavbarTexts(
            (state.lang === 'esp') ? EspNavbarTexts : EngNavbarTexts
        );
    }, [state.lang]);

    const changeLang = () => {
        setState(state => ({ 
            ...state, 
            lang: (state.lang === 'esp') ? 'eng' : 'esp' 
        }));
    }

    return (
        <div className="Navbar">
            <Link to="/home" className="link">{navbarTexts.home}</Link>
            <Link to="/about" className="link">{navbarTexts.about}</Link>
            <Link to="/licenses" className="link">{navbarTexts.licenses}</Link>
            <Link to="/contact" className="link">{navbarTexts.contact}</Link>

            <button onClick={() => changeLang()}>
                <MdLanguage /> {state.lang}
            </button>
        </div>
    );
}

export default Navbar;