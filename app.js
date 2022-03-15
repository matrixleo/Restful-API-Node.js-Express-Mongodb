const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//ROUTES

app.get('/', (req,res) => {
    res.send('We are on home');
}); 

app.get('/post', (req,res) => {
    res.send('We are on post ');
}); 

mongoose.connect(process.env.DB_CONNECTION , () => console.log("connected to db "))
//HOW TO START LISTEN TO THE SERVER
app.listen(3000);