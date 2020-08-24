const fs  = require("fs");

const fileBuffer = fs.readFileSync('htmlFileToTranslate.txt');

const str = fileBuffer.toString();

const textsToTranslateObj = {};

const regexArr = [
    {
        regex: /'(.*)'\|translate/g,
        replaceText: '|translate'
    },
    {
        regex: /'(.*)'\| translate/g,
        replaceText: '| translate'
    },
    {
        regex: /'(.*)' \|translate/g,
        replaceText: ' |translate'
    },
    {
        regex: /'(.*)' \| translate/g,
        replaceText: ' | translate'
    },
]

for(let regexObj of regexArr) {

    let textsToTranslate = str.match(regexObj.regex);

    if(textsToTranslate) {
        for(let text of textsToTranslate) {
            let correctTxt = text.replace(/'/g, "");
            correctTxt = correctTxt.replace(regexObj.replaceText, "");
            textsToTranslateObj[correctTxt] = "";
        }
    }

}


fs.writeFileSync('english.json', JSON.stringify(textsToTranslateObj));



