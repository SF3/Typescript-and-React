import {print, printTitle} from "./print.js";

let doAfter = function (step, delay) {
    return new Promise((resolve, reject) => {
        console.log("Step " + step);
        setTimeout(() => resolve(step), delay);
    });
};

function* multiplePromises() {
    yield doAfter(1, 2000);
    yield doAfter(2, 2000);
    yield doAfter(3, 2000);
    yield doAfter(4, 2000);
}

(async () => {
    console.log("Performing one after another");
    for (let promise of multiplePromises()) {
        const step = await promise;
        console.log("Read back step id " + step);
    }

    console.log('----');

    console.log("Performing one after another new syntax");
    console.log("The result is extracted for us");
    for await (let step of multiplePromises()) {
        console.log("Read back step id " + step);
    }

    console.log('----');

    console.log("Performing at the same time");
    const steps = await Promise.all(multiplePromises());
    console.log("Performed steps: " + steps);
})();



