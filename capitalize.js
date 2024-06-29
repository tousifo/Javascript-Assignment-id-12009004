//Write a JavaScript function that accepts a string as a parameter and  converts the first letter of each word of the string in upper case.

function capitalize(text) {
  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

const prompt = require("prompt-sync")();

const str = prompt("Enter a String: ");

const result = capitalize(str);

console.log(result);
