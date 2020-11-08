'/Users/chris/mongodb/bin/mongod --dbpath=/Users/chris/mongodb-data'

const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/netflix-react-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const account = new User({
    name: "chris",
    email: "c.sison@wsu.edu",
    password: "Ardvark12!@"
})

account.save().then(() => {

}).catch((error) => {
    console.log('error ', error);
}) 