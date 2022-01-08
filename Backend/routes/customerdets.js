const express = require('express');
const router = express.Router();
const Customers = require('../models/customer');

//get the cutomer details saved in database
router.get('/', async (req, res) => {
    try {
        const data = await Customers.find()
        return res.send({ success: true, data });
    } catch (error) {
        console.log(error.message);
    }
});

//find customer details by id
router.route('/:id').get((req, res) => {
    Customers.findById(req.params.id)
        .then(customer => res.json(customer))
        .catch(err => res.status(400).json('Error:' + err));
});

//update the data by id 
router.route('/update/:id').post((req, res) => {
    Customers.findById(req.params.id)
        .then(customer => {
            customer.customerId = Number(req.body.customerId);
            customer.firstname = req.body.firstname;
            customer.lastname = req.body.lastname;
            customer.balance = Number(req.body.balance);
            customer.email = req.body.email;
            customer.save()
                .then(() => res.json('cutomer database updated'))
                .catch(err => res.status(400).json('Error:' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
});

//add customers
router.post('/add', async (req, res) => {
    const customerId = req.body.customerId;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const balance = req.body.balance;
    const email = req.body.email;
    const newcustomer = new Customers({
        customerId,
        firstname,
        lastname,
        balance,
        email
    })
    try {
        const res1 = await newcustomer.save()
        console.log(res1);
        return res.send({ success: true, res1 });
    } catch (error) {
        console.log(error.message);
    }
});



module.exports = router;