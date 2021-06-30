import {print, printTitle} from "./print.js";

let numberMap = new Map();
numberMap.set(0, "Zero");
numberMap.set(1, "One");
numberMap.set(2, "Two");
numberMap.set(3, "Three");
numberMap.set(4, "Four");
numberMap.set(5, "Five");

printTitle("Map keys");
for (let key of numberMap.keys()) {
    print(key);
}

printTitle("Map values");
for (let value of numberMap.values()) {
    print(value);
}

printTitle("Destructured map");
for (let [key, value] of numberMap) {
    print(`${key} = ${value}`);
}

printTitle("Interating over a map");
let mapIterator = numberMap[Symbol.iterator]();
let next = mapIterator.next();
while (!next.done) {
    print(next.value);
    next = mapIterator.next();
}

printTitle("Check for membership");
print(numberMap.has(0));
print(numberMap.has(10));

printTitle("Remove entries");
print(`Before delete, a value for the key "0" exists: ${numberMap.has(0)}`);
numberMap.delete(0);
print(`After delete, a value for the key "0" exists: ${numberMap.has(0)}`);


