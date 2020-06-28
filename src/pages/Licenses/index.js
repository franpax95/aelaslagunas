import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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

    const renderLicenseCards = () => (<>
        <h1 className="licenseCards-title">{licensesTexts.title}</h1>
        <div className="licenseCards-container">
            {licensesTexts.licenseCards.map((card, key) => (
                <LicenseCard key={key} {...card} />
            ))}
        </div>
    </>);
    
    
    

    const renderLicense = () => (
        <div className="license-container">
            <h1>{licensesTexts.licenses[id].title}</h1>
            <h2>{licensesTexts.licenses[id].subtitle}</h2>
            <div className="description">{nl2br(licensesTexts.licenses[id].description)}</div>
            <div className="features">
                {licensesTexts.licenses[id].features.map((feature, key) => (
                    <p key={key}><b>{feature.label}:</b> {feature.content}</p>
                ))}
            </div>
        </div>
    );

    return (
        <div className="Licenses">
            {(id) ? renderLicense() : renderLicenseCards()}
        </div>
    );
}

export default withRouter(Licenses);