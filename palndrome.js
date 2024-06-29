//Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
    const newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    const reversedStr = newStr.split('').reverse().join('');
    
    return newStr === reversedStr;
}

const prompt = require("prompt-sync")();

const str = prompt("Enter a String: ");

const value = isPalindrome(str)

if(value) console.log("The string is a palindrome!");
else console.log("The string is not a palindrome!");