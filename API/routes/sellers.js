const express = require('express');
const router = express.Router();

const sellerController = require('../controllers/seller')
const chechAuth = require('../middleware/check-auth')



// router.use(chechAuth);
// router.post('/',upload.single('brandImage'), sellerController.createSeller =>{

// });
router.post('/', sellerController.createSeller);
router.get('/',sellerController.getSeller);


module.exports = router;