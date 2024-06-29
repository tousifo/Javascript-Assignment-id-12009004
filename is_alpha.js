//Write a JavaScript function to check whether a given value is alpha numeric or not.

function isAlphanumeric(value) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(value);
}

const prompt = require("prompt-sync")();

const value = prompt("Enter a value: ");

if (isAlphanumeric(value)) console.log("Yes! Alphanumeric");
else console.log("NO!");
