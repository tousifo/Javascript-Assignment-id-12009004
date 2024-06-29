//Write a JavaScript function to validate whether a given value type is boolean or not.

function isBoolean(value) {
    return typeof value == "boolean";
}

const prompt = require('prompt-sync')();

const value = prompt("Enter any type of value: ");
let newValue;
if(value==='true'){
    newValue = true;
}
else if(value==='false'){
    newValue = false;
}
else{
    newValue = value;
}
result = isBoolean(newValue);

if(result) console.log("Boolean.")
else console.log("Not Boolean.")
