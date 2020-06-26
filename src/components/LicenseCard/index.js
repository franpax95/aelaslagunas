import React from 'react';
import { SmallButton } from '../buttons';
import './LicenseCard.css';

const LicenseCard = ({ img, title, subtitle, links }) => (
    <div className="LicenseCard">
        <div className="image"><img src={img} alt={title}/></div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="links">
            {links.map((link, key) => (
                <SmallButton key={key} type="link" width="100px" height="33px" to={`/licenses/${link.id}`}>
                    {link.name}
                </SmallButton>
            ))}
        </div>
    </div>
);

export default LicenseCard;