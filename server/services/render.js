const axios = require('axios');

exports.homeRoutes=(req,res)=>{

    //make a get request to users/api
    // axios.get('http://localhost:3000/api/users/')
    // .then(function(response){
    //     console.log(response)
    //     res.render('index',{users:response.data});
    // })
    // .catch(err=>{
    //     res.send(err)
    // })
    res.render('');
   
}
exports.contact=(req, res)=>{
    res.render('contact');
}
exports.add_user=(req, res)=>{
    res.render('add_user');
}
exports.achievement=(req, res)=>{
    res.render('achievement');
}
exports.services=(req, res)=>{
    res.render('services');
}
exports.about=(req, res)=>{
    res.render('about');
    
}
exports.view_devusertest=(req, res)=>{
    //make a get request to users/api
    axios.get('http://localhost:3000/api/users/')
    .then(function(response){
        console.log(response)
        res.render('view_devusertest',{users:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
    //res.render('view_devusertest');
}
exports.update_user=(req, res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
   .then(function(userdata){
        res.render("update_user",{user:userdata.data})
   })
   .catch(err=>{
       res.send(err);
   })
    //res.render('update_user');
}