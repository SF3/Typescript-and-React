import {print, printTitle} from "./print.js";


const arrayOne = ["aaa", "eee", "bbb", "ddd", "ccc"];


printTitle("Original Array");
print(arrayOne.join());


printTitle("Joined with custom separator")
print(arrayOne.join("#"));


printTitle("Reversed Array");
arrayOne.reverse();
print(arrayOne);


printTitle("Sorted Array");
arrayOne.sort();
print(arrayOne);


printTitle("Custom Sorted Array");
const reverseSort = (s1, s2) => s1.charAt(0) > s2.charAt(0) ? -1 : 1;
arrayOne.sort(reverseSort);
print(arrayOne);


printTitle("Array Built from Concatenation");
const arrayTwo = arrayOne.concat("xxx", "yyy", "zzz");
print(arrayTwo);


printTitle("Array built from Slicing");
const arrayThree = arrayOne.slice(0, 3);
print(arrayThree);


printTitle("Spliced Array");
arrayOne.splice(2, 0, 123);
print(arrayOne);


printTitle("Array After Push And Unshift");
arrayOne.push("QQQQQ");
arrayOne.unshift("WWWWW");
print(arrayOne);


printTitle("Array After Pop And Shift");
arrayOne.pop();
arrayOne.shift();
print(arrayOne);


printTitle("Final Array Contents");
print(arrayOne);
