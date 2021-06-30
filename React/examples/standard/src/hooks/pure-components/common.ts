import {Set} from "immutable";

export const sectionStyle = {
    border: 'thin solid black',
    width: '50%', padding: '1em'
};

export function concatenateValues(values: Set<string>): string {
    console.log('Concatenating');
    return values.reduce((a, b) => a + "-" + b);
}
