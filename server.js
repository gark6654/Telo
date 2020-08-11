const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.send('For view send request to /items');
});

app.get('/items', (req, res) => {
    const items = [
        {
            name: "Persil 5kg",
            desc: "Persil 5kg Automatic Washing Pawder for color",
            price: 11000,
            category: "Washing Powder",
            img: "persil.jpg"
        },
        {
            name: "Persil",
            desc: "Persil 2.34L Liquid detergent for color",
            price: 8500,
            category: "Washing Gel",
            img: "PersilLiquidDetergent.jpg"
        },
        {
            name: "Gillette Fusion5 PROSHIELD",
            desc: "Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades",
            price: 12000,
            category: "Shaver",
            img: "GilletteFusion5.jpg"
        },
    ];

    res.json(items); // Send data already converted to JSON.
});

app.get('/add_item', (req, res) => {
    console.log(req.query.name);
    res.send('OK');
});

app.post('/buy', (req, res) => {
    res.send('OK');
    console.log(req.body);
});

app.listen(5000, () => {
    console.log("App runing on 5000 port");
});