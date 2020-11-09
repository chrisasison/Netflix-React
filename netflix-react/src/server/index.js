'/Users/chris/mongodb/bin/mongod --dbpath=/Users/chris/mongodb-data'

const express = require('express');
require('../db/mongoose');
const User = require('../models/user');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
})




app.listen(port, () => {
    console.log('Server running on ' + port);
})