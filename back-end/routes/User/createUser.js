const User = require('../../models/user')

module.exports = (app) => {
    app.post('/users', (req, res) => {
        delete req.body._id;
        const model = new User({
            ...req.body
        })
        model.save()
        .then(() => res.status(201).json({ message: 'User added'}))
        .catch(error => res.status(400).json({ error }));
    });
}