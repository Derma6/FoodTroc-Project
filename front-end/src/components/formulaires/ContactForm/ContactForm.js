import React from 'react';
import { Link } from 'react-router-dom';

//----------------------IMPORT MUI----------------------//
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = ({ user }) => {
  if (user) {
    return (
      <>
        <h1>Contact</h1>
        <TextField id="object" label="OBJET DU MESSAGE" variant="outlined" />
        <TextField
          id="message"
          label="VOTRE MESSAGE..."
          multiline
          rows={10}
          variant="outlined"
        />
        <Button>ENVOYER</Button>
      </>
    );
  } else {
    return (
      <>
        <h1>Contact</h1>
        <p>
          Vous avez un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
        <TextField id="name" label="PRÉNOM" variant="outlined" />
        <TextField id="email" label="EMAIL" variant="outlined" />
        <TextField id="object" label="OBJET DU MESSAGE" variant="outlined" />
        <TextField
          id="message"
          label="VOTRE MESSAGE"
          multiline
          minRows={10}
          maxRows={10}
          variant="outlined"
        />
        <Button>ENVOYER</Button>
      </>
    );
  }
};

export default Contact;
