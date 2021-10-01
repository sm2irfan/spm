const express = require('express');
const router = express.Router();
const controller = require('../controller/promotion.con');


module.exports = function() {
    router.post('/createpromotion', controller.createpromotion);
    router.get('/getallpromotion', controller.getallpromotion);
    router.delete('/deletepromotion/:id', controller.deletepromotion);
    router.get('/getpromotion/:id', controller.getpromotion);
    router.post('/updatepromotion/:id', controller.updatepromotion);
    router.get('/pdfpromotion/:id', controller.pdfpromotion);

    
    return router;
}