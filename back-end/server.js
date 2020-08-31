const express = require('express');
const app = express();
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
const MongoConfig = require('./MongoConfig.json');
const bodyParser = require('body-parser');

const db_URL = `mongodb+srv://${MongoConfig.user}:${MongoConfig.pass}@cluster0.pp4gp.mongodb.net/`;

var db;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('For view send request to /items');
});

app.get('/items', (req, res) => {
    var items = [];

    db.collection('products').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        docs.map(doc => {
            items.push(doc);
        });

        // Send data already converted to JSON.
        res.json(items);
    });
});

app.post('/buy', (req, res) => {
    let id;
    const data = req.body.data;

    // Get db orders count for identification.
    db.collection('orders').find().count((err, count) => {
        if (err) {
            return res.sendStatus(500);
        }
        id = count + 1;

        // Insert document to DB before identification.
        db.collection('orders').insertOne({ _id: id, data }, (err) => {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }

            res.send('Post request for buy basket');
        });
    });
});

mongoClient.connect(db_URL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log("Error, can't connect to mongoDB");
    }
    db = client.db('urartu');

    app.listen(5000, () => {
        console.log("App running on 5000 port");
    });
});