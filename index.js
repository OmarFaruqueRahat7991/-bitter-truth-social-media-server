const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Bitter Truth Social Server Is Running');
})

app.listen(port, () => console.log(`Bitter Truth Social Server Is Running On ${port}`))