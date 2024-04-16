var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

router.get('/:departure/:arrival/:date', (req, res) =>{
    
  Trip.find({departure : req.params.departure , arrival : req.params.arrival, date: req.params.date})
  .then(listTrip => {
      res.json({trip : listTrip});
    })
  });

module.exports = router;