const express = require('express');
const dotenv = require ('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer')

const connectDB=require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'})
const port = process.env.PORT || 3000
//log request

app.use(morgan('tiny'));

//mongodb connection

connectDB();


//
app.use(bodyParser.urlencoded({extended:true}));
//set view engine

app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname,'views/ejs') )

//load assets
app.use("/assets", express.static(__dirname + '/assets'));

// app.use('/css',express.static(path.resolve(__dirname,"/assets/css")));
// app.use('/js',express.static(path.resolve(__dirname,"/assets/js")));
// app.use('/',express.static(path.resolve(__dirname,"/assets")));
// app.use('/uploads',express.static(path.resolve(__dirname,"/assets/uploads")));

app.use('/', require('./server/routes/router'));

app.listen(port,()=>{
    console.log("port 3000 started");
})