'/Users/chris/mongodb/bin/mongod --dbpath=/Users/chris/mongodb-data'

import { MongoClient, ObjectID } from 'mongodb';

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'netflix-react';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);
    
    db.collection('users')
})