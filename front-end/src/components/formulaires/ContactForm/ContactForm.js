import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SeparatorLessMargin from '../../SeparatorLessMargin/SeparatorLessMargin';

import '../../../styles/forms.css';
import { UserContext } from '../../../utilities/Context';
import emailjs from '@emailjs/browser';
import validRegex from '../../../utilities/regex/regex'


const Contact = () => {
  const { user } = useContext(UserContext);
  const [emailCreate, setEmailCreate] = useState()

 // ---------------------------- EMAILJS ----------------------------------------------- //
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState()
  const [invalidEmail, setInvalidEmail] = useState();


  function validEmailContact() {
    console.log(emailCreate)
    if (emailCreate.match(validRegex)) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  }

  const sendEmail = () => {
    
    validEmailContact()
    if (invalidEmail) return

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
          Vous avez un compte ? <Link className="join-us" to="/login">Connectez-vous</Link>
        </p>
        <form ref={form} className="inputs">
          <input type="text" name="user_name" placeholder="PRÉNOM" />
          <input type="email" onChange={(e) => {
            setEmailCreate(e.target.value)
            console.log(emailCreate)
            }} name="user_email" className="emailCreate" placeholder="EMAIL" />
          {invalidEmail && (
          <h4 style={{ margin: '3% 0 0% 0', color: 'darkgreen' }}>
            Veuillez entrer une adresse mail valide
          </h4>
        )}
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
