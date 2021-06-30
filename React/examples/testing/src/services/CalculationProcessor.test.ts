import CalculationProcessor from "./CalculationProcessor";

function fail(): void {
    expect(true).toBeFalsy();
}

describe("CalculationProcessor", () => {
    let target = new CalculationProcessor();

    beforeEach(() => {
        jest.useFakeTimers();
    });

    [
        {input1: 1, input2: 2, expectedResult: 3},
        {input1: 10, input2: 40, expectedResult: 50}
    ].forEach(({input1, input2, expectedResult}) =>
        it(`Adds numbers - ${input1}, ${input2}`, async () => {
            const result = target.add(input1, input2)       ;
            jest.runOnlyPendingTimers();

            expect(await result).toEqual(expectedResult);
        }));

    [
        {input1: 1, input2: 2, expectedResult: -1},
        {input1: 10, input2: 40, expectedResult: -30}
    ].forEach(({input1, input2, expectedResult}) =>
        it(`Subtract numbers - ${input1}, ${input2}`, async () => {
            const result = target.subtract(input1, input2)       ;
            jest.runOnlyPendingTimers();

            expect(await result).toEqual(expectedResult);
        }));

    [
        {input1: 1, input2: 2, expectedResult: 2},
        {input1: 10, input2: 40, expectedResult: 400}
    ].forEach(({input1, input2, expectedResult}) =>
        it(`Multiplies numbers - ${input1}, ${input2}`, async () => {
            const result = target.multiply(input1, input2)       ;
            jest.runOnlyPendingTimers();

            expect(await result).toEqual(expectedResult);
        }));

    [
        {input1: 10, input2: 2, expectedResult: 5},
        {input1: 40, input2: 10, expectedResult: 4},
        {input1: 0, input2: 10, expectedResult: 0}
    ].forEach(({input1, input2, expectedResult}) =>
        it(`Divides numbers - ${input1}, ${input2}`, async () => {
            const result = target.divide(input1, input2)       ;
            jest.runOnlyPendingTimers();

            expect(await result).toEqual(expectedResult);
        }));

    it(`Dividing by zero throws an error`, async () => {
        await expect((async () => {
            const result = target.divide(10, 0);
            jest.runOnlyPendingTimers();
            return await result;
        })()).rejects.toEqual(new Error("Cannot divide by zero"));
    });
});
