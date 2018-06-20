const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

var User = require('./models/user');

mongoose.connect('mongodb://admin:gk108000@ds261660.mlab.com:61660/ecommarce_user',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('connected to database');
});
var app = express();

//Logger
app.use(morgan('dev'));
//security
app.use(helmet());




app.get('*',(req,res,next)=>{
    var err = new Error();
    err.staus=404;
    next(err);
});
app.use((err,req,res,next)=>{
    res.send('Requested page is not available');
});
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log('server is running on port 3000');
});