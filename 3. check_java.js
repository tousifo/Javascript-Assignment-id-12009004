function startsWithJava(str) {
    return str.startsWith("Java");
}

const userInput = prompt("Enter a string:");
const startsWithJavaResult = startsWithJava(userInput);
console.log(`Starts with 'Java': ${startsWithJavaResult}`);
