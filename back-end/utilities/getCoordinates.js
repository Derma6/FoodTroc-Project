const fetch = require('node-fetch');

module.exports = (req, res, next) => {
  fetch(
    `https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&q=&rows=1&refine.nom_de_la_commune=${req.body.location.toUpperCase()}`
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (req.body = {
          ...req.body,
          gpsCoordinates: data.records[0].fields.coordonnees_gps,
        })
    )
    .then(() => {
      next();
    });
};
