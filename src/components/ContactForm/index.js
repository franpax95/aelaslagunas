import React from 'react';
import { GeneralButton } from '../buttons';
import './ContactForm.css';

const ContactForm = ({ formTexts = {}, values={}, onInputChange, onSubmitClick, width = 'auto', height = 'auto' }) => (
    <div className="ContactForm" style={{ width, height }}>
        <input 
            type="text"
            value={values.name}
            name="name"
            placeholder={formTexts.name.placeholder}
            onChange={onInputChange}
        />

        <input
            type="email"
            value={values.email}
            name="email"
            placeholder={formTexts.email.placeholder}
            onChange={onInputChange}
        />

        <input
            type="text"
            value={values.subject}
            name="subject"
            placeholder={formTexts.subject.placeholder}
            onChange={onInputChange}
        />

        <textarea
            value={values.message}
            name="message"
            placeholder={formTexts.message.placeholder}
            onChange={onInputChange}
        ></textarea>

        <GeneralButton onClick={onSubmitClick}>
            {formTexts.submit}
        </GeneralButton>
    </div>
);

export default ContactForm;