const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const bodyParser = require('body-parser');
const mailer = require('nodemailer');
const { static } = require('express');

// 
const public_dir = path.join(__dirname, 'public');
// DB
const db_URL = `mongodb+srv://${config.mongo.user}:${config.mongo.pass}@cluster0.pp4gp.mongodb.net/`;
var db;

// Mail
const sender = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

app.use(express.static(public_dir));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'build')));

// _*_*_*__*_*_*_ Products requests _*_*_*__*_*_*_
// Get products
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

// Add new product... 
app.post('/add_product', (req, res) => {
    const item = req.body.item;

    // Insert document to DB before identification.
    db.collection('products').insertOne({
        Name: item.name,
        Desc: item.description,
        Category: item.category,
        Price: item.price,
        Img: item.img,
        Count: item.count
    }, (err) => {
        if (err) {
            res.sendStatus(500);
            console.log("Can't insert item to DB");
            return console.error(err);
        }

        return res.send('Post request for add new products ');
    });
});

// _*_*_*__*_*_*_ Categories requests _*_*_*__*_*_*_
// Get categories 
app.get('/categories', (req, res) => {
    var categories = [];
    db.collection('categories').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        docs.map(category => {
            categories.push(category);
        });

        // Send data already converted to JSON.
        res.json(categories);
    });
});

// Add new category 
app.post('/add_category', (req, res) => {
    const category = req.body.category;
    console.log(category);
    res.send('OK');
});

// _*_*_*__*_*_*_ Order Request _*_*_*__*_*_*_
app.post('/buy', (req, res) => {
    const data = req.body.data;
    let id;

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

            const items = data.items.map(item => (
                `<tr>
                    <td>${item.product.name}</td>
                    <td>${item.product.desc.AM}</td>
                    <td>${item.count}</td>
                </tr>`
            ));

            const html = `
                <div>
                    <h1>Order ID:${id}</h1>
                    <h4>Customer: ${data.customer.firstName} ${data.customer.lastName}</h4>
                    <h4>Phone: ${data.customer.phone}</h4>
                    <h4>Address: ${data.customer.address}</h4>
                    <h4>PayType: ${data.customer.payType}</h4>
                </div>
                <table>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Description</th>
                        <th>Item Count</th>
                    </tr>
                    ${items}
                </table>
                <h6>Free Delivery: ${data.freeDelivery}</h6>
                <h3>Pay: ${data.pay}</h3>
            `;

            sender.sendMail({
                from: 'gark.6654@gmail.com',
                to: 'Telman9291@gmail.com, gark.6654@gmail.com',
                subject: 'New order from shop',
                html: html
            }, function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`
                        Order ID: ${id}
                        Email sent status: OK
                    `);
                }
            });

            res.send('Post request for buy basket');
        });
    });
});

// If can't find url redirect to front end.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
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