const myVar1 = new Array(4);
const myVar2 = ",,,";
const myVar3 = 1.0000000000001;
const myVar4 = 1;

if (myVar1 == myVar2) {
    console.log("JavaScript array equality is problematic");
} else {
    console.log("JavaScript array equality is fine");
}
if (myVar3 == myVar4) {
    console.log("Numeric equality will also surprise you");
} else {
    console.log("Numeric equality will not surprise you");
}
