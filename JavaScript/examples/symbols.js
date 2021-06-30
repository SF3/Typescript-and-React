class Person {
    constructor(name, ...emails) {
        this.name = name;
        this.emails = emails;
        this[Symbol("hero name")] = "The Batman"
        this[Symbol("lair")] = "The Batcave"
    }

    [Symbol.iterator] = function* () {
        for (let email of this.emails) {
            yield email;
        }
    };
}

export function showSymbols() {
    const person = new Person(
        "Bruce Wayne",
        "bruce@waynetech.com", "lord@waynemanor.us", "b.wayne101@gmail.com");

    console.log("Iterating properties of person");
    for (let prop in person) {
        console.log('\t', prop);
    }
    console.log("Iterating contents of person");
    for (let thing of person) {
        console.log('\t', thing);
    }
    console.log("Iterating secrets of person");
    for (let sym of Object.getOwnPropertySymbols(person)) {
        console.log('\t', sym);
    }
}
showSymbols();
