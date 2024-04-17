var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

router.get('/', (req, res) =>{
    Cart.find().then(data => {
        console.log(data);
        res.json({trip : data});
        });
  })



router.post('/', (req, res) =>{
    const newCart = new Cart({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date,
        price: req.body.price,
        isPaid: false
    });
    
    newCart.save().then(() => {
        Cart.find().then(data => {
        console.log(data);
        res.json({result : true});
        });
    });
})

router.get('/purchase', (req, res) =>{
    Cart.updateMany(
        {isPaid : false },
        {isPaid : true})
        .then(() => {
        Cart.find().then(data => {
            console.log(data);
            res.json({trip : data});
          });     
     });
})

router.get('/notPurchase', (req, res) =>{
    Cart.find({isPaid : false}).then(data => {
        console.log(data);
        res.json({trip : data});
        });
})


router.delete('/', (req,res) =>{    
    Cart.deleteMany({}).then(data => {
        console.log(data);
        res.json({result : true});
    });
})

router.delete('/:deleteId', (req,res) =>{    
    Cart.deleteOne({_id: req.params.deleteId}).then(data => {
        console.log(data);
        res.json({result : true});
    });
})

module.exports = router;