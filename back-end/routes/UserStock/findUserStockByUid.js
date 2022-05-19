const UserStock = require('../../models/userStock')

module.exports = (app) => {
    app.get('/userStocks/:uid', (req, res) => {
        
        UserStock.findOne({uid : req.params.uid}, (err, document) => {
            if(!err )res.json(document)
        });
    });
}