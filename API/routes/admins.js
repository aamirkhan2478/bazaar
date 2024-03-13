const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')




router.post('/signup', adminController.createAdmin);
router.get('/',adminController.getAdmin);


module.exports = router;