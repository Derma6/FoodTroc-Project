import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ProfilCard from '../../components/ProfilCard/ProfilCard';

import { UserContext } from '../../utilities/Context';
import { redirect } from '../../utilities/redirect';

import './Troc.css';

const Troc = () => {
  redirect('/login');

  const { user } = useContext(UserContext);

  const [data, setData] = useState();
  const [research, setResearch] = useState();
  const [area, setArea] = useState(20);
  const [city, setCity] = useState();
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    document.title = 'Troquez - FoodTroc';
  }, []);

  useEffect(() => {
    setCity([]);
    async function fetchData(area) {
      setDataLoading(true);
      const response = await fetch(
        `http://localhost:3001/users?uid=${user.uid}&rayon=${area}`
      );
      const data = await response.json();
      setData(data);
      setDataLoading(false);
    }

    user && fetchData(area);
  }, [user, area]);

  return (
    <main className="troc-page">
      {user ? (
        <>
          <section className="troc-filter-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Rechercher un fruit ou un légume..."
              onChange={(e) => {
                setResearch(e.target.value);
              }}
            />
            <div className="select-area">
              <label htmlFor="select-area" id="select-label">
                Rayon autour de chez vous :{' '}
              </label>
              <select
                id="select-area"
                label="area"
                onChange={(e) => setArea(e.target.value)}
              >
                <option value={5}>5 kms</option>
                <option value={10}>10 kms</option>
                <option value={15}>15 kms</option>
                <option defaultValue={20} selected>
                  20 kms
                </option>
                <option value={25}>25 kms</option>
                <option value={30}>30 kms</option>
              </select>
            </div>
          </section>
          <section>
            {isDataLoading ? (
              <Loader />
            ) : (
              <div className="troc">
                {data.map((troqueur) => (
                  <ProfilCard
                    key={troqueur.uid}
                    troqueur={troqueur}
                    research={research}
                  />
                ))}
              </div>
            )}
          </section>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};

export default Troc;
