const UserStock = require('../../models/userStock')

module.exports = (app) => {
    app.post('/userStocks', (req, res) => {
        delete req.body._id;
        const model = new UserStock({
            ...req.body
        })
        model.save()
        .then(() => res.status(201).json({ message: 'UserStock added'}))
        .catch(error => res.status(400).json({ error }));
    });
}