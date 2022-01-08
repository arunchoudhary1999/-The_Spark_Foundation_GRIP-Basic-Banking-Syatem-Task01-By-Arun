express = require('express');
router = express.Router();
TransHist = require('../models/transactions');

//get trasactions
router.route('/').get((req, res) => {
    TransHist.find()
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json('Error:' + err));
});

//add trasactions
router.route('/add').post((req, res) => {
    const transactionId = req.body.transactionId;
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const amount = req.body.amount;
    const date = req.body.date;
    const newtransaction = new TransHist({
        transactionId,
        sender,
        receiver,
        amount,
        date
    })
    newtransaction.save()
        .then(() => res.json('transaction added in history'))
        .catch(err => res.status(400).json('Error:' + err));
});




module.exports = router;  