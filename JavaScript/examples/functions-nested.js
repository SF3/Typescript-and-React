import {print, printTitle} from "./print.js";

function collatzSequence(value) {
    // All function styles can be nested
    function isEven() {
        // Access to parent scope variable
        return value % 2 === 0;
    }
    const next = () => isEven() ? nextEven() : nextOdd();
    const nextEven = () => Math.floor(value / 2);
    const nextOdd = () => (value * 3) + 1;
    const isFinished = () => value === 1;

    printTitle(`Collatz Sequence for ${value}`)
    while(true){
        print(value);

        if (isFinished()) break;

        value = next();
    }
}

collatzSequence(3);
collatzSequence(64);
