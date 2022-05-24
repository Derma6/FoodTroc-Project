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
              User.find({ location: cities }, (err, data) => {
                res.json(data);
              });
            });
        }
      });
    } else {
      User.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
