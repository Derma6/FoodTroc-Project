const admin = require('firebase-admin');
const serviceAccount = require('./foodtroc-f0edf-firebase-adminsdk-x3bdz-b9da285385.json');

// Add json private key to firebase folder.

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
