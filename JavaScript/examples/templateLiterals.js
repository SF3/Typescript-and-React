import {print, printTitle} from "./print.js";

function saySomething(msg) {
    print(`You said: ${msg}`);
}

function func(text, ...inputs) {
    print(text[0]);
    print(text[1]);
    print(inputs[0]);
    print(inputs[1]);
}

printTitle("Using Regular Template Literals");
saySomething("Hello World!");
saySomething(1 + 2);
saySomething(`${(2 + 6) / 2}`);
saySomething(`The meaning of life is ${6 * 7}`);

printTitle("Using Tagged Template Literals");
const no1 = 5;
const no2 = 6;
const no3 = 7;
print(`Results are ${no1 + no2 + no3} and ${no1 * no2 * no3}`);

print("-------");

func`Results are ${no1 + no2 + no3} and ${no1 * no2 * no3}`

