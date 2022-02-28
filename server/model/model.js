const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
   dropd:{
      type:String,
      required:true
     },
    name:{
       type:String,
       required:true 
    },
    lname:{
      type:String,
      required:true 
   },
   date:{
      type:String,
      required:true 
   },
   mobile:{
      type:Number,
      required:true 
   },
    email:{
        type:String,
        required:true 
     },
     coc:{
      type:Number,
      required:true 
   },
   issued:{
      type:String,
      required:true 
   },
  
   //   gender:String,
   //   status:String,
   
     avatar:{
      type:String,
      required:true 
   },
    
   
})

const Userdb = mongoose.model('userdb',scheme);
module.exports=Userdb;