import range from 'lodash/range';

export type Sequence = 'Linear' | 'Square' | 'Fibonacci' | 'Triangular';

function* fibonacciInfinite(): Generator<number> {
    let prev = 0;
    let current = 1;

    while (true) {
        const next = prev + current;
        prev = current;
        current = next;
        yield current;
    }
}

function take<T>(sequence: Iterator<T>, length: number) {
    const result = [];
    for (let ii = 0; ii < length; ii++) {
        result.push(sequence.next().value);
    }
    return result;
}

type SequenceFunction = (length: number) => number[];

const linear: SequenceFunction = length => range(1, length + 1);
const fibanacci: SequenceFunction = length => take(fibonacciInfinite(), length);
const square: SequenceFunction = length => linear(length).map(x => x * x);
const triangular: SequenceFunction = length => linear(length ).map(x => (x * (x + 1)) / 2);

export function sequence(name: Sequence, length: number): number[] {
    console.log('Generating sequence');
    switch (name) {
        case 'Linear': return linear(length);
        case 'Square': return square(length);
        case 'Triangular': return triangular(length);
        case 'Fibonacci': return fibanacci(length);
        default:
            throw Error('Unknown sequence');
    }
}
