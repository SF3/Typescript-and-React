export function showTemplateStrings() {
    let val1 = "abcde";
    let val2 = 1234;
    let val3 = true;

    console.log("Values are " + val1 + ", " + val2 + " and " + val3);
    console.log(`Values are ${val1}, ${val2} and ${val3}`);

    console.log("Values are " + val1.toUpperCase() + ", " + (val2 * 2) + " and " + !val3);
    console.log(`Values are ${val1.toUpperCase()}, ${val2 * 2} and ${!val3}`);
}
