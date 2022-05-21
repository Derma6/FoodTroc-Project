import React, { useEffect } from 'react';
import './Contact.css';

import ContactForm from '../../components/formulaires/ContactForm/ContactForm';

const Contact = () => {

  useEffect(() => {
    document.title = "Contact - FoodTroc";  
  }, []);

  return (
    <div className="contact">
      <ContactForm />
    </div>
  );
};

export default Contact;
