import {print} from "./print.js";

export class Employee {
    constructor(name) {
        this.name = name;
    }

    calcSalary() {
        print(`Calculating salary for ${this.name}`);
    }

    takeHoliday() {
        print(`${this.name} is taking a holiday`);
    }
}

export class Manager extends Employee {
    constructor(name) {
        super(name);
    }

    promote(employee) {
        print(`${this.name} is promoting ${employee.name}`);
    }

    downsize(employee) {
        print(`${this.name} is downsizing ${employee.name}`);
    }
}

let dave = new Employee("Dave");
dave.calcSalary();
dave.takeHoliday();

let jane = new Manager("Jane");
let fred = new Manager("Fred");
jane.calcSalary();
fred.takeHoliday();
jane.promote(dave);
fred.downsize(dave);
