const fs = require('fs');
const path = './public/javascripts/bundle/';
const entris = fs.readdirSync(path);

let arr = {};

for(let item of entris){
    const key = item.split('.')[0];

    Object.assign(arr, {
        [key]:path+item
    });
}

module.exports = arr;
