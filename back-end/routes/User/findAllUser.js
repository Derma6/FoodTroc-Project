const User = require('../../models/user');
const fetch = require('node-fetch');

module.exports = (app) => {
  app.get('/users', (req, res) => {
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

          /////////////////////////////////////////////

          // async function fetchData(latitude, longitude, area, callback) {
          //   const response = await fetch(
          //     `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=&rows=500&geofilter.distance=${latitude}%2C+${longitude}%2C+${area}000`
          //   );
          //   const data = await response.json();
          //   console.log(
          //     data.records[data.records.length - 1].fields.nom_de_la_commune
          //   );

          //   const promise = new Promise((resolve, reject) => {
          //     console.log(data);
          //     const response = [];
          //     const last =
          //       data.records[data.records.length - 1].fields.nom_de_la_commune;
          //     let finish = false;

          //     data.records.map((element) => {
          //       User.find(
          //         { location: element.fields.nom_de_la_commune },
          //         (err, data) => {
          //           data.map((obj) => {
          //             response.push(obj);
          //           });
          //         }
          //       );
          //       if (element.fields.nom_de_la_commune === last) {
          //         finish = true;
          //       }
          //       finish && resolve(response);
          //     });
          //   });

          //   const resp = await promise;

          //   console.log(resp);
          //   // res.json(resp);
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
          //   req.query.rayon
          // );
          //////////////////////////////////////////////////
        }
      });
    } else {
      User.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
