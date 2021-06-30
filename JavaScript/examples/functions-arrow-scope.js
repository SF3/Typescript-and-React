import {print, printTitle} from "./print.js";

const staffMember = {
    name: "John Smith",
    jobTitle: "Deputy Assistant Bottle Washer",
    dayRate: 100
};

staffMember.calculateSalary = function(daysWorked) {
    return this.dayRate * daysWorked;
};

staffMember.fullTitle = () => {
    return `${this.name} - ${this.jobTitle}`;
};

print(staffMember.name);
printTitle("Functions do not capture 'this'")
print(`Earned £${staffMember.calculateSalary(7)} over the last 7 days`);

printTitle("Arrows capture 'this' - fails as method definition outside of class")
print(`Full Title: ${staffMember.fullTitle()}`);
