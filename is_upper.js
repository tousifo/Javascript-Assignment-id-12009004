//Write a JavaScript program to test the first character of a string is uppercase or not.

function isFirstCharUppercase(str) {
  const regex = /^[A-Z]/;
  return regex.test(str);
}

const prompt = require("prompt-sync")();

const value = prompt("Enter a value: ");

if (isFirstCharUppercase(value))
  console.log("First character is in upper case.");
else console.log("First character is not in upper case.");
