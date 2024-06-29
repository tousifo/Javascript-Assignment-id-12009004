//Write a JavaScript program to count number of words in string.

function countWords(str) {
  const regex = /\b\w+\b/g;
  const words = str.match(regex);
  return words ? words.length : 0;
}

const prompt = require("prompt-sync")();

const value = prompt("Enter a value: ");
console.log("Number of word is: " + countWords(value));
