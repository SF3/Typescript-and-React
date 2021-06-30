let doAfter = function (message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Example " + message);
            resolve(message);
        }, delay);
    });
};

function example1WithSuccess() {
    return doAfter("Example 1 Begin", 1000)
        .then(() => doAfter("Example 1 Ends", 1000));
}

function example2WithFail() {
    return doAfter("Example 2 Begin", 5000)
        .then(() => doAfter("Example 2 about to fail ", 1000))
        .then(() => Promise.reject("Failing Example 2"))
        .then(() => doAfter("Example 2 never gets here", 1000));
}

example1WithSuccess()
    .then(() => console.log("Successfully completed example 1"))
    .catch(err => console.log(`Something went wrong: ${err}`))
    .finally(() => console.log('This will happen either way'));

example2WithFail()
    .then(() => console.log("Successfully completed example 2"))
    .catch(err => console.log(`Something went wrong: ${err}`))
    .finally(() => console.log('This will happen either way'))
    .then(() => console.log("Catch returns a promise so can continue chaining"));



