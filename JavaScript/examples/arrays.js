import {print, printTitle} from "./print.js";

printTitle("Create Empty array via constructor")
const array1 = new Array();
array1[0] = "abc";
array1[1] = 123;
array1[2] = "def";
print(array1);


printTitle("Create Empty array via []]")
const array2 = [];
array2[0] = "abc";
array2[1] = 123;
array2[2] = "def";
print(array2);

printTitle("Create Populated Array via constructor")
const array3 = new Array("abc", 123, "def", 456, "ghi", 789);
print(array3);

printTitle("Create Populated Array via []]")
const arrayThree = ["abc", 123, "def", 456, "ghi", 789];
print(arrayThree);
