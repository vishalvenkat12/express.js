


const path = require('path'); //core feature offered by express to specify the path of a file

const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');


router.get('/contact-us', contactController.contactUs);



module.exports = router;