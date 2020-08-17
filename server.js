const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('For view send request to /items');
});

app.get('/items', (req, res) => {
    mongo.connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true }, (err, db) => {
        if (!err) {
            console.log(db);
        }
        else {
            console.error(err);
        }
    });

    const items = [
        {
            name: "Persil 5kg",
            desc: "Persil 5kg Automatic Washing Pawder for color",
            price: 11000,
            category: "Washing Powder",
            img: "persil.jpg"
        },
    ];

    res.json(items); // Send data already converted to JSON.
});

app.post('/buy', (req, res) => {
    const data = req.body.data;
    console.log(data);
    res.send('Post request for buy basket');
});

app.listen(5000, () => {
    console.log("App runing on 5000 port");
});