function sortThreeNumbers(a, b, c) {
    if (a <= b && b <= c) {
        alert(`${a}, ${b}, ${c}`);
    } else if (a <= c && c <= b) {
        alert(`${a}, ${c}, ${b}`);
    } else if (b <= a && a <= c) {
        alert(`${b}, ${a}, ${c}`);
    } else if (b <= c && c <= a) {
        alert(`${b}, ${c}, ${a}`);
    } else if (c <= a && a <= b) {
        alert(`${c}, ${a}, ${b}`);
    } else {
        alert(`${c}, ${b}, ${a}`);
    }
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

sortThreeNumbers(num1, num2, num3);
