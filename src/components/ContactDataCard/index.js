import React from 'react';
import './ContactDataCard.css';

const ContactDataCard = ({ title = '', email = {}, phone = {}, width = 'auto', height = 'auto' }) => (
    <div className="ContactDataCard" style={{ width, height }}>
        <h1>{title}</h1>
        {(Object.values(email).length) && <p><b>{email.label}:</b> {email.content}</p>}
        {(Object.values(phone).length) && <p><b>{phone.label}:</b> {phone.content}</p>}
    </div>
);

export default ContactDataCard;