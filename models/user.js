const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/UserDetails');
// var db = mongoose.connection;


//user schema for new users
var UserSchema = new    Schema({
    name: {type:String,required:true},
    username : {type:String,unique:true,required:true},
    password:{type:String,required:true},
    email:{type:String,unique:true,lowercase:true,required:true},
    phone:{type:Number,unique:true,required:true},
    address:[{
        AdderssLine1 :String,
        AddressLine2 :String,
        Landmark:String,
        Area:String,
        City:String
    }],
    history:[{
      date:Date,
      paid:{type:Number,default:0},
      item:{type}  
    }]

});

//Hasing password
UserSchema.pre('save',function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10,function(err,salt){
        if(err) next(err);
        bcrypt.hash(user.password,salt,null,function(err,hash){
           if(err) next(err);
            user.password = hash;
            next(); 
        });
    });
});