import React from 'react';
import 'material-icons/iconfont/material-icons.css';
import Button from '@mui/material/Button';
import './ProductCard.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    status: {
      primary: orange[700],
    },
  });

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-info">
                <h2>TOMATES</h2>
                <img src={require("./man_salad.png")}/>
            </div>
            <img style={{width: "180px", height: "150px", borderRadius:"10%"}} className="product-picture" src={require("./Abricot-bienfaits.jpg")}/>
            <div className="product-footer">
                <div className="location">
                    <span class="material-icons">place</span>  
                    <p>Beauvais</p>
                </div>
                <ThemeProvider theme={theme}>
                <Button variant="contained">RESERVER</Button>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default ProductCard;