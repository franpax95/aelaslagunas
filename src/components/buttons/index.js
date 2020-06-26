import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

export const GeneralButton = ({ 
    children,
    type = "button",
    to,
    onClick,
    width = '300px', 
    height = '80px', 
    
}) => (<>
    {(type==="button") && <button onClick={onClick} className="GeneralButton" style={{ width, height}}>{children}</button>}
    {(type==="link") && <Link to={to} className="GeneralButton" style={{ width, height}}>{children}</Link>}
</>);