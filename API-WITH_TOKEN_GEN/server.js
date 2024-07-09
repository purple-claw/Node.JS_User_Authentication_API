const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
//mongoDB Connection
dbURI = "mongodb+srv://dev:dev1234@node.9lkn7j5.mongodb.net/?retryWrites=true&w=majority&appName=Node";
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        console.log("Connected to DataBase Succesfully");
    })
    .catch((err)=>{
        console.log("Error");
    });

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//route
app.get('/', (req,res) => {
    res.json({ message: "Welcome to Authentication FrameWork Using MERN Stack"});
});

require('./app/routes/auth')(app);
require('./app/routes/user_routes')(app);

app.listen(3000);