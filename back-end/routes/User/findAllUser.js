const User = require('../../models/user');
const fetch = require('node-fetch');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    console.log(req.query.uid);
    console.log(req.query.rayon);
    if (req.query.uid && req.query.rayon) {
      User.find({ uid: req.query.uid }, (err, data) => {
        if (!err) {
          fetch(
            `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=&rows=500&geofilter.distance=${data[0].gpsCoordinates[0]}%2C+${data[0].gpsCoordinates[1]}%2C+${req.query.rayon}000`
          )
            .then((response) => response.json())
            .then((data) => {
              const cities = [];

              data.records.map((element) =>
                cities.push(element.fields.nom_de_la_commune)
              );
              return cities;
            })
            .then((cities) => {
              function f(cities) {
                const response = [];

                cities.map((city) => {
                  User.find({ location: city }, (err, data) => {
                    data.map((user) => response.push(user));
                  });
                });

                return response;
              }

              const response = f(cities);

              setTimeout(() => res.json(response), 2000);
            });
          // .then((response) => res.json(response));

          // async function fetchData(latitude, longitude, area, callback) {
          //   const response = await fetch(
          //     `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=&rows=500&geofilter.distance=${latitude}%2C+${longitude}%2C+${area}000`
          //   );
          //   const data = await response.json();

          //   const cities = [];

          //   data.records.map((element) =>
          //     cities.push(element.fields.nom_de_la_commune)
          //   );
          //   console.log(callback(cities));
          // }

          // function findUsers(cities) {
          //   const response = [];

          //   cities.map((city) => {
          //     User.find({ location: city }, (err, data) => {
          //       data.map((obj) => {
          //         response.push(obj);
          //       });
          //     });
          //   });

          //   return response;
          // }
          // fetchData(
          //   data[0].gpsCoordinates[0],
          //   data[0].gpsCoordinates[1],
          //   req.query.rayon,
          //   findUsers
          // );
        }
      });
    } else {
      User.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
