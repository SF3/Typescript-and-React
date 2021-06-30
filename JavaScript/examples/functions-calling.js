function printArgs(p1, p2, p3, p4) {
    console.log("Function printArgs called with: ");
    console.log(Array.from(arguments));
}

console.log(`Function printArgs expects: ${printArgs.length} arguments`);

printArgs("a");
printArgs("a", "b");
printArgs("a", "b", "c");
printArgs("a", "b", "c", "d");
printArgs("a", "b", "c", "d", "e");
printArgs("a", "b", "c", "d", "e", "f");



function add(p1, p2) {
    return p1 + p2;
}

const resultOne = add(15, 3);
console.log("First call to add returns: " + resultOne);

const func = add;
const resultTwo = func(12, 7);
console.log("Second call to add returns: " + resultTwo);
