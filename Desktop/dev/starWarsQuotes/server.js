const express= require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

const connectionString= "mongodb+srv://Yoda:12345@cluster0.2vnr1.mongodb.net/test?retryWrites=true&w=majority";


MongoClient.connect(connectionString, {useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('test')
        const quotesCollection = db.collection('quotes');

app.get( '/', (req, res) => {
    res.sendFile("/Users/jeremyking/Desktop/dev/starWarsQuotes/index.html")
});

app.post('/quotes', (req, res) => {
    console.log(req.body)
});

app.listen(3000, () => {
    console.log('listening on 3000')
});
    }).catch(console.error);