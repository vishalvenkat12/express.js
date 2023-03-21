const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent)=>{
        if(err){
           return cb([]);
        } else {
        return cb(JSON.parse(fileContent));
        }
        
    });
}

module.exports = class product {
    constructor(title){
        this.title=title;
    }
save() {
    getProductsFromFile(product => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err)=>{
         console.log(err);
    });
});
}

static fetchAll(cb) {
    getProductsFromFile(cb);
   
}
};