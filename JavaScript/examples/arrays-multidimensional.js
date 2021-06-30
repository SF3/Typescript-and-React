import {print, printTitle} from "./print.js";

function print2DimensionalArray(array) {
    printTitle("Access using indexing");
    for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
            print(`Row ${rowIndex}, Column ${columnIndex} : ${array[rowIndex][columnIndex]}`);
        }
    }
    print("");
}

function print2DimensionalArrayForOf(array) {
    printTitle("Access via for of");
    for (const row of array) {
        for (const column of row) {
            print(column);
        }
    }
}

function print2DimensionalArrayForEach(array) {
    printTitle("Access via Collection Pipeline");
    array.forEach((row, rowIndex) =>
        row.forEach((column, columnIndex) =>
            print(`Row ${rowIndex}, Column ${columnIndex} : ${column}`)
        )
    );
}

const arrayOne = [];
arrayOne[0] = [];
arrayOne[1] = [];
arrayOne[2] = [];

arrayOne[0][0] = "abc";
arrayOne[0][1] = "def";
arrayOne[0][2] = "ghi";

arrayOne[1][0] = "abc";
arrayOne[1][1] = "def";
arrayOne[1][2] = "ghi";
arrayOne[1][3] = "jkl";

arrayOne[2][0] = "abc";
arrayOne[2][1] = "def";
arrayOne[2][2] = "ghi";
arrayOne[2][3] = "jkl";
arrayOne[2][4] = "mno";
print2DimensionalArray(arrayOne);


const arrayTwo = new Array(3);
arrayTwo[0] = ["abc", "def", "ghi"];
arrayTwo[1] = ["abc", "def", "ghi", "jkl"];
arrayTwo[2] = ["abc", "def", "ghi", "jkl", "mno"];
print2DimensionalArrayForOf(arrayTwo);
print(arrayTwo);


const arrayThree = [["abc", "def", "ghi"], ["abc", "def", "ghi", "jkl"], ["abc", "def", "ghi", "jkl", "mno"]];
print2DimensionalArrayForEach(arrayThree);
