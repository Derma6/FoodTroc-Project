const { getAuth } = require('firebase-admin/auth');
const User = require('../../models/user');

const app = require('../../firebase/firebaseConfig');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({
      message: `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`,
    });
  }

  const token = authorizationHeader.split(' ')[1];

  getAuth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      if (req.route.stack[0].method === 'post') {
        next();
      } else {
        const uid = decodedToken.uid;
        User.findOne({ uid: req.params.uid }, (err, data) => {
          if (uid === data.uid) {
            next();
          } else {
            res.status(403).json({
              message: `Accès refusé, cette ressource n'est pas la votre.`,
            });
          }
        });
      }
    })
    .catch((error) => {
      res.status(403).json({
        message: `Vous n'êtes pas autoriser à effectuer cette action. Veuillez créer un compte valide.`,
      });
    });
};
