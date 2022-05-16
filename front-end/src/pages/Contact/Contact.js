import React from 'react';
import './Contact.css'

import ContactForm from '../../components/formulaires/ContactForm/ContactForm';

const Contact = ({ user }) => {
  return (
    <div className="contact">
      <ContactForm user={user} />
    </div>
  );
};

export default Contact;
