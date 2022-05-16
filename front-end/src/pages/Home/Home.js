import React from 'react';

import add from '../../styles/images/add.png';
import search from '../../styles/images/search.png';
import login from '../../styles/images/login.png';
import users from '../../styles/images/users.png';

import './Home.css';

const Home = () => {
  return (
    <main>
      <h1>Echanger vos récoltes !</h1>
      <section className="first-section">
        <div>
          <img src={login} alt={`logo login`} />
          <p>Identifiez-vous</p>
        </div>
        <div>
          <img src={add} alt={`logo add`} />
          <p>Remplissez votre potager</p>
        </div>
        <div>
          <img src={search} alt={`logo search`} />
          <p>Trouvez les meilleurs fruits et légumes près de chez vous</p>
        </div>
        <div>
          <img src={users} alt={`logo users`} />
          <p>Troquez !</p>
        </div>
      </section>
      <div className="separator"></div>
      <section className="second-section">
        <h2>Nos valeurs</h2>
        <p>
          Je clique, je troque ! En seulement 2 clics, FOOD TROC offre aux
          particuliers d’échanger les fruits et légumes de leurs potagers, ce
          qui permet aux jardiniers de troquer de manière régulière et ainsi
          éviter le gaspillage.
          <br />
          <br /> FOOD TROC veut favoriser la consommation de proximité et
          inventer un nouveau lien social autour du bon goût retrouvé des
          produits de la terre à s’échanger entre voisins. FOOD TROC joue donc
          le rôle d’intermédiaire mettant en relation des particuliers vivant
          dans un même secteur et souhaitant échanger des fruits, légumes et
          produits maison issus de leur propre récolte.
        </p>
      </section>
      <div className="separator"></div>
    </main>
  );
};

export default Home;
