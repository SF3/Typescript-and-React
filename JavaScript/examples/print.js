export function printTitle(title) {
    console.log(`--- ${title} ---`);
}

export function print(text) {
    console.log(text);
}

export function printObject(object) {
    for (const propName in object) {
        print(`${propName} has value ${object[propName]}`)
    }
}

