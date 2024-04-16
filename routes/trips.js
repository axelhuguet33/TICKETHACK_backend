var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

router.get('/', (req, res) =>{
    Trip.find().then(listTrip => {
      res.json({trip : listTrip});
    })
  });

  
module.exports = router;