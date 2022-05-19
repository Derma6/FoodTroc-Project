import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import '../../../styles/forms.css';
import { UserContext } from '../../../utilities/Context';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { user } = useContext(UserContext);

 // ---------------------------- EMAILJS ----------------------------------------------- //
  const form = useRef();

  const sendEmail = () => {
  

    emailjs.sendForm('service_rr6dhnc', 'template_mhedlzq', form.current, 'qD5WRLIvKcOyPw8Zx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  if (user) {
    return (
      <div className="form">
        <h1>Contact</h1>
        <SeparatorLessMargin />
        <form ref={form} className="inputs">
          <input name="user_message_subject" type="text" placeholder="OBJET DU MESSAGE" />
          <textarea name="user_message" type="text" rows="10" placeholder="VOTRE MESSAGE"></textarea>
        </form>
        <input type="submit" value="Send" className="validate-form" />
      </div>
    );
  } else {
    return (
      <div className="form">
        <h1>Contact</h1>
        <SeparatorLessMargin />
        <p>
          Vous avez un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
        <form ref={form} className="inputs">
          <input type="text" name="user_name" placeholder="PRÉNOM" />
          <input type="email" name="user_email" placeholder="EMAIL" />
          <input type="text" name="user_message_subject" placeholder="OBJET DU MESSAGE" />
          <textarea type="text" name="user_message" rows="10" placeholder="VOTRE MESSAGE"></textarea>
        </form>
        <button type="submit" onClick={sendEmail} className="validate-form">ENVOYER</button>
      </div>
    );
  }
};

export default Contact;
