//-------------------------------IMPORT-------------------------------//

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

//---------------------------------------URL MongoDB---------------------------------------//

const url =
  'mongodb+srv://foodtroc:1uYM8MbGX6Vb1qVK@foodtroccluster.vgw8z.mongodb.net/?retryWrites=true&w=majority';

//---------------------------------------MONGOOSE CONNECT---------------------------------------//

mongoose.connect(url, (err, db) => {
  if (err) console.log(err);

  //-----------------------------USER------------------------------//

  require('./routes/User/createUser')(app);
  require('./routes/User/deleteUser')(app);
  require('./routes/User/findAllUser')(app);
  require('./routes/User/modifyUser')(app);
  require('./routes/User/findUserByUid')(app);
});

app.listen(port);
