const express = require('express');
const router = express.Router();

const qualityController = require('../controllers/qaualityController')




router.post('/signup', qualityController.createQualityController);
router.get('/',qualityController.getQualityController);


module.exports = router;