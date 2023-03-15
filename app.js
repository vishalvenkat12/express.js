const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<html><body><form action="/product" method="POST"><label for="name">Name</label><input type="text" name="title" id="name"><label for="size">Size</label><input type="number" name="size" id="size"><button type="submit">Add Product</button></form></body></html>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to express</h1>');
});
app.listen(3000);