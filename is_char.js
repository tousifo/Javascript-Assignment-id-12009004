//Write a JavaScript function to validate whether a given value type is char or not

function isChar(value) {
    return typeof value === 'string' && value.length === 1;
  }
  const prompt = require('prompt-sync')();
  const inputValue = prompt("Enter a value: ");

  const result = isChar(inputValue)
  
  if(result) console.log("Character.")
  else console.log("Not Character.")