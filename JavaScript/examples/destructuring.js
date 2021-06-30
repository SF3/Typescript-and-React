import {print, printObject, printTitle} from "./print.js";

let array = ["abc", 123, "def", 456];

printTitle("Destructure an array");
let [val1, val2, val3, val4] = array;
print(val1);
print(val2);
print(val3);
print(val4);

printTitle("Destructure an array with a spread operator");
let [value1, value2, ...value3] = array;
print(value1);
print(value2);
print(value3);

let employee = {
    name: "Dave",
    age: 34,
    salary: 30000.0,
    address: "10 Arcatia Road"
};

printTitle("Destructure an object using default names");
let {name, age, salary, address} = employee;
print(name);
print(age);
print(salary);
print(address);

printTitle("Destructure an object using custom names");
let {name: p1, age: p2, salary: p3, address: p4} = employee;
print(p1);
print(p2);
print(p3);
print(p4);


printTitle("Copy an object with changes via spread operator");
let newEmployee = {
    ...employee,
    name: "Jane",
    address: "12 Arcatia Road"
};
printObject(newEmployee);

printTitle("Copy an array via spread operator");
let newArray = ["start", ...array, "end"];
printObject(newArray);
