import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

import { UserContext } from '../../utilities/Context';

import './Troc.css';

const Troc = () => {
  const { user } = useContext(UserContext);

  const [research, setResearch] = useState();
  const [area, setArea] = useState(20000);
  const [city, setCity] = useState();

  useEffect(() => {
    setCity([]);
    async function fetchData(latitude, longitude, area) {
      const response = await fetch(
        `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=&rows=500&geofilter.distance=${latitude}%2C+${longitude}%2C+${area}`
      );
      const data = await response.json();

      const city = [];

      data.records.map((element) =>
        city.push(element.fields.nom_de_la_commune)
      );
      setCity(city);
    }

    fetchData(user.gpsCoordinates[0], user.gpsCoordinates[1], area);
  }, [user, area]);

  console.log(city);

  return (
    <main className="troc-page">
      <section className="troc-filter-container">
        <input type="text" placeholder="Recherché un fruit ou un légume..." />
      </section>
      <section>
        <div className="troc">
          <ProductCard />
        </div>
      </section>
    </main>
  );
};

export default Troc;
