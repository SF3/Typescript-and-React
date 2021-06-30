printType(/abc/);
printType(new Date());
printType(function () { return 1; });
printType([1, 2, 3]);
printType({ a: 123, b: "abc" });
printType(123);

function printType(obj) {
    if (obj instanceof RegExp) {
        console.log("Input is a RegExp object");
    } else if (obj instanceof Array) {
        console.log("Input is an Array object");
    } else if (obj instanceof Function) {
        console.log("Input is a Function object");
    } else if (obj instanceof Date) {
        console.log("Input is a Date object");
    } else if (obj instanceof Object) {
        console.log("Input is an unknown kind of object");
    } else {
        console.log("Input is not an object");
    }
}
