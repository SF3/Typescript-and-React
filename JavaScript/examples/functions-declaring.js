

// Add access above declaration
console.log("A:" + add(12, 8));

// Named function
function add(p1, p2) {
    return p1 + p2;
}


// Subtract will fail as not defined yet
// console.log("B:" + subtract(12, 8));

// Anonymous function assigned to variable
const subtract = function (p1, p2) {
    return p1 - p2;
};


// Named function also assigned to variable - factorial not in scope outisde of function
const productOfAllNumbersLessThanOrEqualToNumber = function factorial(p) {
    if (p === 1) {
        return 1;
    }
    return p * factorial(p - 1);
};

console.log("C:" + subtract(12, 8));
console.log("D:" + productOfAllNumbersLessThanOrEqualToNumber(5));

try {
    console.log("E:" + factorial(5));
} catch (error) {
    console.log("E: symbol 'factorial' not in scope...");
}
console.log(productOfAllNumbersLessThanOrEqualToNumber.name); // factorial




