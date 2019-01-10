const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'handling GET requests to /products'
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'mevans27'){
        res.status(200).json({
            message: 'this is a bunch of good information about Mitchell',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'Unrecognized NetID: ',
            id: id
        });
    }
});

module.exports = router;