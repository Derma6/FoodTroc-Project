import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

import { UserContext } from '../../utilities/Context';

import './Troc.css';

const Troc = () => {
  const { user } = useContext(UserContext);

  const [research, setResearch] = useState();
  const [area, setArea] = useState(20);
  const [city, setCity] = useState();

  useEffect(() => {
    document.title = "Troquez - FoodTroc";  
  }, []);

  useEffect(() => {
    setCity([]);
    async function fetchData(area) {
      const response = await fetch(
        `http://localhost:3001/users?uid=${user.uid}&rayon=${area}`
      );
      const data = await response.json();

      console.log(data);
    }

    fetchData(area);
  }, [user, area]);

  console.log(city);

  return (
    <main className="troc-page">
      <section className="troc-filter-container">
        <input type="text" placeholder="Rechercher un fruit ou un légume..." />
        <select label="area" onChange={(e) => setArea(e.target.value)}>
          <option value={5}>5 kms</option>
          <option value={10}>10 kms</option>
          <option value={15}>15 kms</option>
          <option value={20} selected>
            20 kms
          </option>
          <option value={25}>25 kms</option>
          <option value={30}>30 kms</option>
        </select>
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
