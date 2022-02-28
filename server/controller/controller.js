const Userdb = require('../model/model');
var userdb = require('../model/model');


//create and save new user
exports.create = (req, res) => {
    console.log(req.file)
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content can not be empty!"
        });
        return;
    }
    //new user   
    const user = new Userdb({
        dropd: req.body.dropd,
        name: req.body.name,
        lname: req.body.lname,
        date: req.body.date,
        mobile: req.body.mobile,
        email: req.body.email,
        coc: req.body.coc,
        issued: req.body.issued,
        // gender: req.body.gender,
        // status: req.body.status,        
        avatar:req.file.path,      
        

    })

    //save user in database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured ehile creayte operation"
            })
        })

}


//retrive and return all user and new user
exports.find = (req, res) => {

if(req.query.id){
const id = req.query.id;

Userdb.findById(id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:"not found users with id" + id
            })
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"error retreiving with user" +id})
    })
}else{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "eorror occur while retrieve the message"
        })
    })
}

}



//update a new identified by user is

exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({
                message: "data to update can not be empty"
            })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: `can not be update user with ${id} may be user not found`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error update user information"
            })
        })
}



//delete a user by specified id

exports.delete = (req, res) => {
 const id=req.params.id;
 Userdb.findByIdAndDelete(id)
 .then(data=>{
     if(!data){
         res.status(404).send({message:`can not delete with id ${id}. may be id is wrong`})
     }
     else{
         res.send({
message:"user was deleted successfully"
         })
     }
 })
 .catch(err=>{
     res.status(500).send({
         message:"could not delete wit id=" +id
     })
 })
}