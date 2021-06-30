import {print, printTitle} from "./print.js";


printTitle("Basic arrow functions");
let saySomething = () => { console.log("saying something")};
let saySomethingBetter = (thing) => { console.log("saying something: " + thing)};
saySomething();
saySomethingBetter("saying this");


const array = ["abc", 123, "def", 456, "ghi", 789];

printTitle("Single line function");
// 'return' is implicit, brackets are not necessary
const numbers = array.filter(value => typeof(value) === "number");
numbers.forEach(value => print(value));

printTitle("Multi line function");

// 'return' required, brackets required
const strings = array.map(value => {
    value += "xxx";
    return value.toUpperCase();
});

strings.forEach(value => print(value));
