import {print, printTitle} from "./print.js";

function* numbers() {
    console.log('Inside function 1');
    yield 1;
    console.log('Inside function 2');
    yield 2;
    console.log('Inside function 3');
    yield 3;
    console.log('Inside function 4');
    yield 4;
    console.log('Inside function 5');
    yield 5;
    console.log('Inside function 6');
    yield 6;
}

function* moreNumbers() {
    yield* numbers();
    yield 7;
    yield 8;
    yield 9;
}

function* wordPairs(string) {
    let words = string.split(" ");
    for (let index = 0; index < words.length - 1; index++) {
        yield [words[index], words[index + 1]];
    }
}

printTitle("Delegating generator");
const generatedNumbers = numbers();
console.log("About to run loop");
for (let number of generatedNumbers) {
    print(number);
}

let generatedWordPairs = wordPairs("This is some text that we will parse.");
log("Simple generator", generatedWordPairs);

printTitle("Delegating generator mapped");
Array.from(numbers())
    .map(x => x * 2)
    .forEach(print);

function log(title, generator) {
    printTitle(title);
    let next = generator.next();
    while (!next.done) {
        print(next.value);
        next = generator.next();
    }
}
