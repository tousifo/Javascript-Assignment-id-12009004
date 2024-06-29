//Write a JavaScript function to count the number of vowels in a given string

function Vowels(str) {
  const regex = /[aeiouAEIOU]/g;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const prompt = require("prompt-sync")();

const value = prompt("Enter a value: ");

console.log("Number of vowel is: " + Vowels(value));
