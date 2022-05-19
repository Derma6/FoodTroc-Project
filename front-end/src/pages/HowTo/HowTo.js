import React from 'react';
// import baniere from '../../styles/images/fruitsveggies.png';
import Separator from '../../components/Separator/Separator';
import people from '../../styles/images/people_fruits.jpg'
import basket from '../../styles/images/fruit_basket.jpg'


import './HowTo.css';

const HowTo = () => {
  return (
    <main>
      <div className="baniere"></div>
      <h1 className="howTo-title">Comment ça marche ?</h1>
      <Separator />
      <section className="first-section-howto">
        <div className="image-quote">
          <img id="people-food" src={people} alt={"people exchanging food"}/>
          <div className="quote1">
            <p className="foodtroc-quote">« Un service de qualité au service de l'anti-gaspi ! »</p>
            <p className="foodtroc-user">Antoine, FoodTrocqueur depuis 1 an</p>
          </div>
        </div>
        <p>
          Gratuit, simple d’utilisation et pratique, FOOD TROC est conçu pour
          plaire au plus réticent d’entre nous !
        </p>
        <p>
          Après vous êtes identifié, remplissez votre potager virtuel avec vos
          vraie produits on consulte toutes les annonces de fruits et de légumes
        </p>
        <p>Une adresse mail et un numéro de téléphone, et le tour est joué !</p>
        <p>
          Pour déposer une annonce, on ajoute une description des fruits et
          légumes que l’on souhaite échanger ou vendre, et c’est en ligne !
        </p>
        <div className="image-quote">
          <div className="quote2">
            <p className="foodtroc-quote">« Je ne savais plus quoi faire de mes fruits que je n'utilisais pas. Avec FoodTroc, c'est devenu si simple ! »</p>
            <p className="foodtroc-user">Marie, FoodTrocqueuse depuis 3 mois</p>
          </div>
          <img id="basket" src={basket} alt={"basket"}/>
        </div>
      </section>
    </main>
  );
};

export default HowTo;
