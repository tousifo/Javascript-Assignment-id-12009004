//Write a JavaScript function to check whether a given value is hexadecimal value or not.

function isHexadecimal(value) {
  const regex = /^0x[0-9A-Fa-f]+$/;
  return regex.test(value);
}

const prompt = require("prompt-sync")();

const value = prompt("Enter a value: ");

if (isHexadecimal(value)) console.log("Yes! Hexadecimal.");
else console.log("NO!");
