//Write a JavaScript function to get the number of occurrences of each letter in specified string

function letterCount(str) {
  const noOfChar = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z]/.test(char)) noOfChar[char] = (noOfChar[char] || 0) + 1;
  }
  return noOfChar;
}
const prompt = require("prompt-sync")();

const str = prompt("Enter a String: ");

const occurrences = letterCount(str);
console.log(occurrences)
