// Write a JavaScript function to validate whether a given value type is null or not

function isNull(value) {
    return value === null;
  }

  const prompt = require('prompt-sync')();
  const inputValue = prompt("Enter a value: ");

  let value;
  if(inputValue=="null")
    value = null;
  else
    value = inputValue;

  const result = isNull(value)
  
  if(result) console.log("Null.")
  else console.log("Not Null.")