import {print, printTitle} from "./print.js";

class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    get description() {
        return `${this.name} working in ${this.department} earning ${this.salary}`;
    }
}

let employees = [
    new Employee("Homer", "IT", 30000),
    new Employee("Marge", "HR", 40000),
    new Employee("Bart", "Security", 50000),
    new Employee("Lisa", "Finance", 60000)
];

let employeesProxy = new Proxy(employees, {
    get: (list, property) => {
        for (let employee of list) {
            if (employee.name === property) {
                return employee;
            }
        }
    }
});

print(employeesProxy["Homer"].description);


