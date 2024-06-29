// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(str) {
  const words = str.split(" ");

  let longWord = "";

  for (let word of words) {
    if (word.length > longWord.length) longWord = word;
  }
  return longWord;
}

const prompt = require("prompt-sync")();

const str = prompt("Enter a String: ");

console.log("The longest word is: " + longestWord(str));
