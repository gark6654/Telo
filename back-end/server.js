const express = require('express');
const app = express();
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db_URL = 'mongodb+srv://gark6654:jokerxan3808@cluster0.pp4gp.mongodb.net/';

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
    const data = req.body.data;
    console.log(data);
    res.send('Post request for buy basket');
});

mongoClient.connect(db_URL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Error');
    }
    db = client.db('urartu');

    app.listen(5000, () => {
        console.log("App running on 5000 port");
    });
});