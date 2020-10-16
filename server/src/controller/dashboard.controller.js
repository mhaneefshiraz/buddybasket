var express = require('express');
var router = express.Router();
const Response = require('../components/response')


exports.insertrestaurant = function (req, res, next) {
    let db = req.app.get('db');
    console.log(req.body.approve_reject)
    var insertrestaurant = ` INSERT INTO restaurant(res_name,res_img,res_category,res_loc,res_type,res_title)
    VALUES(?,?,?,?,?,?);`
  
    console.log(insertrestaurant);
    data = req.body
    db.query(insertrestaurant, [req.body.name,req.body.Image,req.body.category,req.body.loc,req.body.type,req.body.title], function (err, result) {
      if (err) {
        

        res.send(new Response.ErrorResponse('Internal server error',err))
      }
      // 'res': result, 'data': data,'status':200 
    
        res.send(new Response.SuccessResponse(result, 'Record insert sucessfully'));
    });
  }


  exports.insertlocation= function (req, res, next) {
    let db = req.app.get('db');
    console.log(req.body.approve_reject)
    var insertrestaurant = ` INSERT INTO location(city,state)VALUES(?,?);`
  
    console.log(insertrestaurant);
    data = req.body
    db.query(insertrestaurant, [req.body.city,req.body.state], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse('Internal server error',err))
      }
      
      res.send(new Response.SuccessResponse(result, 'Record insert sucessfully'));
    });
  }

  exports.getloc= function (req, res, next) {
    let db = req.app.get('db');
    var getloc = `SELECT * FROM location;`
  
    console.log(getloc);
    
    db.query(getloc, [], function (err, result) {
      if (err) {
             res.send(new Response.ErrorResponse('Internal server error',err))
      }
      
      res.send(new Response.SuccessResponse(result, ''));
    });
  }

  exports.getrestaurant= function (req, res, next) {
    let db = req.app.get('db');
    
    var getres = `SELECT * FROM restaurant;`
  
    console.log(getres);
    
    db.query(getres, [], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse('Internal server error',err))
      }
  
      res.send(new Response.SuccessResponse(result, ''));
    });
  }

  exports.category= function (req, res, next) {
    let db = req.app.get('db');
    
    var getcat = `SELECT * FROM category;`
  
    console.log(getcat);
    
    db.query(getcat, [], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse('Internal server error',err))
      }
  
      res.send(new Response.SuccessResponse(result, ''));
    });
  }

  exports.insertcat= function(req,res,next){
    console.log(req.body)
    let db = req.app.get('db');
    console.log(req.body)
    var insertcat = `INSERT INTO category (cat_name,cat_city,cat_state)VALUES(?,?,?);`
  
    console.log(insertcat);
    db.query(insertcat, [req.body.category,req.body.city,req.body.state], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse('Internal server error',err))
      }
      
      res.send(new Response.SuccessResponse(result, 'Record insert sucessfully'));
    });
  }


