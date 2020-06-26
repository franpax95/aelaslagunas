import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';

import ContactDataCard from '../../components/ContactDataCard';
import ContactForm from '../../components/ContactForm';

import './Contact.css';

import { Contact as EspContactTexts } from '../../lang/spanish';
import { Contact as EngContactTexts } from '../../lang/english';


const Contact = () => {
    const [state, setState] = useContext(Context);
    const [contactTexts, setContactTexts] = useState(
        (state.lang === 'esp') ? EspContactTexts : EngContactTexts
    );
    useEffect(() => {
        setContactTexts(
            (state.lang === 'esp') ? EspContactTexts : EngContactTexts
        );
    }, [state.lang]);



    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onClick = (e) => {
        console.log(values);
        alert(contactTexts.alert);

        // const templateId = 'aelaslagunas';
        // sendMensaje(templateId, values);
    }

    const sendMensaje = (templateId, variables) => {
        window.emailjs.send('gmail', templateId, variables)
            .then(res=> { alert('Email successfully sent!') })
            .catch(err => alert('Email failed.'));
    }

    return (
        <div className="Contact">
            <div className="container">
                <ContactDataCard 
                    {...contactTexts.dataCard} 
                    width="40%" 
                    height="70%" 
                />

                <ContactForm 
                    formTexts={contactTexts.formTexts} 
                    values={values} 
                    onInputChange={onChange} 
                    onSubmitClick={onClick}
                    width="40%" 
                    height="60%" 
                />
            </div>
        </div>
    );
};

export default Contact;