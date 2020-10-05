var express = require('express');
var router = express.Router();
var dashboard = require('../controller/dashboard.controller')
var checkToken = require('../helper/verifyToken')
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
console.log(storage)
var upload = multer({ storage: storage });

/* insert image */ 
router.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log('files', req.files);
    res.send(req.files);
  })

/* insert restaurant. */
router.post('/restaurant',checkToken.verifyToken, dashboard.insertrestaurant);

/* insert location. */
router.post('/location',checkToken.verifyToken, dashboard.insertlocation);

/* get location. */
router.get('/getloc',checkToken.verifyToken, dashboard.getloc);

/*get restaurnat */
router.get('/getrestaurant',checkToken.verifyToken, dashboard.getrestaurant);

module.exports = router;
