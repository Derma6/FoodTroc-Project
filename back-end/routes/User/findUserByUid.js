const User = require('../../models/user')

module.exports = (app) => {
    app.get('/users/:uid', (req, res) => {
        
        User.findOne({uid : req.params.uid}, (err, document) => {
            if(!err )res.json(document)
        });
    });
}