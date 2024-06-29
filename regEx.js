// Write a JavaScript function to validate whether a given value is RegExp or not.

function isRegExp(value) {
    return value instanceof RegExp;
  }

  //const prompt = require('prompt-sync')();
  //const inputValue = prompt("Enter a regular expression: ");

  console.log(isRegExp(/test/));
  console.log(isRegExp('bar'));
  console.log(isRegExp(/72/));

  
  
  