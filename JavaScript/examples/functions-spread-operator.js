import {print, printTitle} from "./print.js";

printTitle("Shorthand syntax for methods");
let math = {
    add(num1, num2) {
        return num1 + num2;
    },

    subtract(num1, num2) {
        return num1 - num2;
    }
};
print(math.add(40, 2));
print(math.subtract(40, 2));

printTitle("Calling with the spread operator");
let numbers = [20, 2];
print(math.add(...numbers));
print(math.subtract(...numbers));


printTitle("Function with a rest parameter");

function multiplyAllBy(multiplier, ...values) {
    return values.map(value => value * multiplier);
}

print(multiplyAllBy(2, 1, 3, 5, 7));
print(multiplyAllBy(10, 1, 3, 5, 7));


