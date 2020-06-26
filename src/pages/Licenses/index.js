import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import LicenseCard from '../../components/LicenseCard';

import './Licenses.css';

import { Licenses as EspLicensesTexts } from '../../lang/spanish';
import { Licenses as EngLicensesTexts } from '../../lang/english';


const nl2br = (str) => str.split("\n").map((item, key) => (
    <React.Fragment key={key}>{item}<br/></React.Fragment>
));

const Licenses = (props) => {
    let id = props.match.params.id;
    useEffect(() => {
        id = props.match.params.id;
    }, [props.match.params.id]);


    const [state, setState] = useContext(Context);
    const [licensesTexts, setLicensesTexts] = useState(
        (state.lang === 'esp') ? EspLicensesTexts : EngLicensesTexts
    );
    useEffect(() => {
        setLicensesTexts(
            (state.lang === 'esp') ? EspLicensesTexts : EngLicensesTexts
        );
    }, [state.lang]);

    renderLicenseCards = () => (
        <div className="licenseCards-container">
            {licensesTexts.licenseCards.map(lic => (
                <LicenseCard

                />
            ))}
        </div>
    );
    
    
    

    renderLicense = () => (
        <div className="license-container">
            <h1>{licensesTexts.licenses[id]}</h1>
        </div>
    );

    return (
        <div className="Licenses">
            <h1>{(!id) ? licensesTexts.title : licensesTexts.licenses[id].title}</h1>
            {!id ? renderLicenseCards() : renderLicense()}
        </div>
    );
}

export default Licenses;