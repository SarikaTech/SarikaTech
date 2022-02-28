//const route = require('color-convert/route');
const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller= require('../controller/controller')

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + '-'+ file.originalname)
    }
  })
  
const upload = multer({ storage:storage })

route.get('/', services.homeRoutes);
route.get('/view_devusertest', services.view_devusertest);
route.get('/apply-online', services.add_user)
route.get('/contact-us', services.contact)
route.get('/update-user',services.update_user)
route.get('/achievement',services.achievement)
route.get('/services',services.services)
route.get('/about',services.about)
//API 
route.post('/api/users',upload.single('avatar'), controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports=route