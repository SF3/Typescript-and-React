const x = 12;
const y = 23;

const obj1 = {x: 34, y: 45};
const obj2 = {x: 56, y: 67};

function f1() {
    if (this === undefined) {
        console.log("'this' is undefined");
        return;
    }
    console.log("Values are: " + this.x + " and " + this.y);
    this.z = (this.x + this.y) || "default value...";
}

console.log("Calling the function standalone:");
f1();

console.log("Calling the function as a method:");
obj1.f2 = f1;
obj1.f2();
console.log(obj1.z);

console.log("Calling the function via 'apply':");
f1.apply(obj2);
console.log(obj2.z);

console.log("Calling the function as a constructor:");
const obj3 = new f1();
console.log(obj3.z);
