var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

router.get('/', (req, res) =>{
    Cart.find()
    .then(listTrip => {
        res.json({trip : listTrip});
    });
  })

router.post('/', (req, res) =>{
    const newCart = new Cart({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date,
        price: req.body.price,
    });
    
    newCart.save().then(() => {
        Cart.find().then(data => {
        console.log(data);
        });
    }); 
})

router.delete('/', (req,res) =>{    
    Cart.deleteMany({}).then(() => { 
        Cart.find().then(data => {
          console.log(data);
        });
       });
})

module.exports = router;