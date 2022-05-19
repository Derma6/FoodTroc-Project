import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import '../../../styles/forms.css';
import { UserContext } from '../../../utilities/Context';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { user } = useContext(UserContext);

 // ---------------------------- EMAILJS ----------------------------------------------- //
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState()
  const navigate = useNavigate();


  const sendEmail = () => {

    !user ? (
      emailjs.sendForm('service_rr6dhnc', 'template_mhedlzq', form.current, 'qD5WRLIvKcOyPw8Zx')
    ) : (
      emailjs.sendForm('service_rr6dhnc', 'template_962sczl', form.current, 'qD5WRLIvKcOyPw8Zx')
    )
      .then((result) => {
          console.log(result.text);
          setEmailStatus(true)
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
          <input style={{display: "none"}} name="user_uid" value={user.uid} type="text"/>
          <input style={{display: "none"}} name="user_name" value={user.name} type="text"/>
          <input name="user_message_subject" type="text" placeholder="OBJET DU MESSAGE" />
          <textarea name="user_message" type="text" rows="10" placeholder="VOTRE MESSAGE"></textarea>
        </form>
        <button type="submit" onClick={sendEmail} className="validate-form">ENVOYER</button>
        {
        emailStatus && <h4 style={{margin: "3% 0 0 0", color: "darkgreen"}}>Demande de contact envoyée.</h4>
      }
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
        {
        emailStatus && <h4 style={{margin: "3% 0 0 0", color: "darkgreen"}}>Demande de contact envoyée.</h4>
      }
      </div>
    );
  }
};

export default Contact;
