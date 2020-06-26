import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import Header from '../../components/Header';
import { GeneralButton } from '../../components/buttons';

import './Home.css';
import establecimiento from '../../images/establecimiento.jpg';

import { Home as EspHomeTexts } from '../../lang/spanish';
import { Home as EngHomeTexts } from '../../lang/english';

const Home = () => {
    const [state, setState] = useContext(Context);
    const [homeTexts, setHomeTexts] = useState(
        (state.lang === 'esp') ? EspHomeTexts : EngHomeTexts
    );
    useEffect(() => {
        setHomeTexts(
            (state.lang === 'esp') ? EspHomeTexts : EngHomeTexts
        );
    }, [state.lang]);

    const nl2br = (str) => str.split("\n").map((item, key) => (
        <React.Fragment key={key}>{item}<br/></React.Fragment>
    ));

    return ( 
        <div className="Home">
            <div className="section zero">
                <div className="left">
                    <h1>{homeTexts.sections[0].title}</h1>
                    <GeneralButton type="link" to="/contact" width="300px" height="60px">
                        {homeTexts.sections[0].contactBtn}
                    </GeneralButton>
                </div>
                <div className="right">
                    <img src={establecimiento} alt="AELasLagunas" />
                </div>
            </div>

            
            <div className="section one">
                <h1 className="title">{homeTexts.sections[1].title}</h1>
                <div className="left">
                    {nl2br(homeTexts.sections[1].left)}
                </div>
                <div className="right">
                    {nl2br(homeTexts.sections[1].right)}
                </div>
            </div>

            <div className="section two">
                <h1 className="title">Autoescuela Las Lagunas</h1>
                <p><b>{homeTexts.sections[2].address.label}:</b> {homeTexts.sections[2].address.content}</p>
                <p><b>{homeTexts.sections[2].phone.label}:</b> {homeTexts.sections[2].phone.content}</p>
                <p><b>{homeTexts.sections[2].email.label}:</b> {homeTexts.sections[2].email.content}</p>
                <div>
                    <b>{homeTexts.sections[2].schedule.label}:</b>
                    <br/>
                    <p className="schedule-content">{nl2br(homeTexts.sections[2].schedule.content)}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;