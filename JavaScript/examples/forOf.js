import {print, printTitle} from "./print.js";

let array = ["abc", 123, "def", 456];
printTitle("Original array");
print(array);


printTitle("While loop");
let index = 0; // Initialisation
while (index < array.length) { // Condition
    print(array[index]);
    index++; // Mutation
}

printTitle("For loop");
//   Initialisation     Condition         Mutation
for (let index = 0; index < array.length; index++) {
    print(array[index]);
}


printTitle("For..in loop Array");
for (let index in array) {
    print(index);
}

printTitle("For..of loop Array");
for (let value of array) {
    print(value);
}

let employee = {
    name: "Dave",
    age: 34,
    salary: 30000.0,
    address: "10 Arcatia Road"
};

printTitle("For..in loop Object");
for (let member in employee) {
    print(member);
}

// *** This would be an error
// printTitle("For..of loop Object");
// for (let item of employee) {
//     print(value);
// }



