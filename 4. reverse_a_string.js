function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const userInput = prompt("Enter a string:");
const reversedString = reverseString(userInput);
console.log(reversedString);
