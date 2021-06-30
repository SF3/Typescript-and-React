const TIMEOUT = 1000;

function performOperationAsync<T>(func: () => T): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(func());
            } catch (error) {
                reject(error);
            }
        }, TIMEOUT);
    });
}

export type CalculationFunction = (input1: number, input2: number) => Promise<number>;

export default class CalculationProcessor {
    add(input1: number, input2: number): Promise<number> {
        return performOperationAsync(() => input1 + input2);
    }

    subtract(input1: number, input2: number): Promise<number> {
        return performOperationAsync(() => input1 - input2);
    }

    multiply(input1: number, input2: number): Promise<number> {
        return performOperationAsync(() => input1 * input2);
    }

    divide(input1: number, input2: number): Promise<number> {
        return performOperationAsync(() => {
            const denominator = input2;
            if (denominator === 0) {
                throw new Error("Cannot divide by zero");
            }
            return input1 / denominator;
        });
    }
}
