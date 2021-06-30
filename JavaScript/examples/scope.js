import {print, printTitle} from "./print.js";

if (true) {
    let life = 42;
    print("The meaning of life is " + life);
    print("Current status is " + status);
}

var status = "RED";

try {
    print("Like I said, the meaning of life is " + life);
}
catch (ReferenceError) {
    print("I have no idea what the meaning of life is");
}
finally {
    currentStatus();
}

function currentStatus() {
    print("At least I know the current status is " + status);
}


