const express = require("express");

const cors = require("cors");

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')
app.use(cors())
app.use(bodyParser.json());
//Import routes

const postsRoute = require('./routes/posts')

app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send('this is home');
});

app.get('/posts',(req,res)=>{
    res.send('this is posts');
});

mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser: true } ,()=>{
    console.log('connected to mongodb')
});


app.listen(8080);