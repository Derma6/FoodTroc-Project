import React from 'react';

//----------------------IMPORT MUI----------------------//
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUpFom = () => {
  return (
    <div className="signUp-form">
      <h1>Inscription</h1>

      <TextField id="name" label="PRÉNOM" variant="outlined" />
      <TextField id="email" label="EMAIL" variant="outlined" />
      <TextField id="password" label="MOT DE PASSE" variant="outlined" />
      <TextField
        id="passwordCONFIRM"
        label="COMFIRMER MOT DE PASSE"
        variant="outlined"
      />
      <TextField
        id="location"
        label="LOCALISATION DE VOTRE POTAGER"
        variant="outlined"
      />
      <Button>S'INSCRIRE</Button>
    </div>
  );
};

export default SignUpFom;
