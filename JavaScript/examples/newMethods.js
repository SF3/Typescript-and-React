// String.prototype.includes - ES2015
const sentence = "This is a great sentence";
console.log(`Is '${sentence}' a great sentence?`,
             sentence.includes("great"));

console.log("Is it case insensitive?",
            sentence.includes("GREAT"));

console.log("---");

// Array.prototype.includes - ES2016
const numbers = [1, 3, 5, 8, 13, 21];
console.log("Does Fibonacci contain 20?",
    numbers.includes(21));

const complex = [{value: 1}, {value: 2}];
console.log("Can include find complex objects?",
            complex.includes({value: 2}));

console.log("Ah, so it only finds by reference?",
            complex.includes(complex[1]));

console.log("---");


// String padding
let message = "JavaScript is great";
console.log(message.padStart(31));
console.log(message.padStart(31, "="));
console.log(message.padStart(25, "*-").padEnd(31, "-*"));

console.log("---");


// Exponentiation - ES2016
console.log(`2 to the power of 32 is ${ 2 ** 31 }`);

console.log("---");


// Object Methods
class Named {
    constructor(name) {
        this.name = name;
    }
}

class Point extends Named {
    constructor(x, y) {
        super("Point");
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return sqrt(x ** 2 + y ** 2);
    }
}

const p1 = new Point(3, 4);
console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(Object.entries(p1));

console.log("---");
