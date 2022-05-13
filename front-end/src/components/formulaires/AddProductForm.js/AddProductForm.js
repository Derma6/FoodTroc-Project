import React from 'react';
import { Link } from 'react-router-dom';

//----------------------IMPORT MUI----------------------//
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddProductForm = () => {
  return (
    <>
      <h1>AJOUTER UN PRODUIT</h1>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Selectionnez votre produit.
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            label="Produit"
            //   onChange={handleChange}
          >
            <MenuItem value={`Tomates`}>Tomates</MenuItem>
            <MenuItem value={`Carrotes`}>Carrotes</MenuItem>
            <MenuItem value={`Pomme de terre`}>Pommes de terre</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField id="selectProduct" label="PRÉNOM" variant="outlined" />
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
};

export default AddProductForm;
