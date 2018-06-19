const express = require('express');
const morgan = require('morgan');

var app = express();

//Logger
app.use(morgan('dev'));




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