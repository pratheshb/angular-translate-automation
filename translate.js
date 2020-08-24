const fs  = require("fs");

const originaltxtBuffer = fs.readFileSync('english.json')

const originalTxt = JSON.parse(originaltxtBuffer.toString());

const transltedBuffer = fs.readFileSync('spanish.json');

const translatedObj = JSON.parse(transltedBuffer.toString());

const output = {};

const keyArr = Object.keys(originalTxt);

const valArr = Object.keys(translatedObj);


for(let i=0; i< keyArr.length; i++){
    output[keyArr[i]] = valArr[i];
}


fs.writeFileSync('translated.json', JSON.stringify(output));

