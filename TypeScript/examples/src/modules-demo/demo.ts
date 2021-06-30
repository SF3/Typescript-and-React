// What is the significance of the 'as' keyword?
import {Employee, Manager as Boss} from "./model"

// How can this be called 'modulesDemo'?
export default function modulesDemo() {
    let emp = new Employee("Dave", "HR");
    let mgr = new Boss("Jane", "IT", 250000.0);

    console.log(emp.toString());
    console.log(mgr.toString());
}
