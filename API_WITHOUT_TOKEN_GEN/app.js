const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authroute = require('./routes/auth');
const userroute = require('./routes/user');

const app = express();

DBURI = "your mongoDBcluster Connection String";
mongoose.connect(DBURI,{ useNewUrlParser: true, useUnifiedTopology : true })
    .then((result) => {
        app.listen(3000);
        console.log("Connected to DataBase Succesfully");
    })
    .catch((err) => {
        console.log("Error Connecting to Database")
    });

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/register', authroute);

// Start the server
app.listen(3000);
