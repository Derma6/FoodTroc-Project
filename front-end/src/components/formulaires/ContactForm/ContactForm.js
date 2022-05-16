import React from 'react';
import { Link } from 'react-router-dom';
import  SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin'


import './ContactForm.css'

const Contact = ({ user }) => {
  if (user) {
    return (
      <div className="contact-form">
        <h1>Contact</h1>
        <SeparatorLessMargin />
        <p>
          Vous avez un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
        <div className="inputs">
          <input placeholder="OBJET DU MESSAGE"/>
          <textarea rows="10" placeholder="VOTRE MESSAGE"></textarea>
        </div>
        <button>ENVOYER</button>
      </div>
    );
  } else {
    return (
      <div className="contact-form">
        <h1>Contact</h1>
        <SeparatorLessMargin />
        <p>
          Vous avez un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
        <div className="inputs">
          <input placeholder="PRÉNOM"/>
          <input placeholder="EMAIL"/>
          <input placeholder="OBJET DU MESSAGE"/>
          <textarea rows="10" placeholder="VOTRE MESSAGE"></textarea>
        </div>
        <button>ENVOYER</button>
      </div>
    );
  }
};

export default Contact;
