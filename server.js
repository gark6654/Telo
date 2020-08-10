const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('For view send request to /items');
});

app.get('/items', (req, res) => {
    const items = [
        {name: "Vanish"},
        {name: "Persil"}
    ];

    res.send(items);
});

app.get('/add_item', (req, res) => {
    console.log(req.query.name);
    res.send('OK');
});

app.listen(4000, () => {
    console.log("App runing on 4000 port");
});