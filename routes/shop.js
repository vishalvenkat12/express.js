const path = require('path'); //core feature offered by express to specify the path of a file

const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;