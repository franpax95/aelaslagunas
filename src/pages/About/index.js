import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import './About.css';

import { About as EspAboutTexts } from '../../lang/spanish';
import { About as EngAboutTexts } from '../../lang/english';

const About = () => {
    const [state, setState] = useContext(Context);
    const [aboutTexts, setAboutTexts] = useState(
        (state.lang === 'esp') ? EspAboutTexts : EngAboutTexts
    );
    useEffect(() => {
        setAboutTexts(
            (state.lang === 'esp') ? EspAboutTexts : EngAboutTexts
        );
    }, [state.lang]);

    const nl2br = (str) => str.split("\n").map((item, key) => (
        <React.Fragment key={key}>{item}<br/></React.Fragment>
    ));

    return (
        <div className="About">
            <div className="section one">
                <h1>{aboutTexts.sections[0].title}</h1>
                <p>{nl2br(aboutTexts.sections[0].content)}</p>
            </div>

            <div className="section two">
                <h1>{aboutTexts.sections[1].title}</h1>
                <p>{nl2br(aboutTexts.sections[1].content)}</p>
            </div>

            <div className="section three">
                <h1>{aboutTexts.sections[2].title}</h1>
                <p>{nl2br(aboutTexts.sections[2].content)}</p>
            </div>
        </div>
    );
}

export default About;