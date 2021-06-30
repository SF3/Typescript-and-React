
export function range(count: number): number[] {
    const values = new Array<number>(count);
    for (let ii = 0; ii < count; ii++) {
        values[ii] = ii;
    }
    return values;
}
