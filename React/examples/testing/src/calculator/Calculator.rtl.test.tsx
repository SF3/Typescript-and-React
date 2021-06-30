import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, RenderResult} from '@testing-library/react'
import {Calculator} from "./Calculator";

let target: RenderResult;
let calculateMock = jest.fn();

beforeEach(() => {
    jest.resetAllMocks();
});

describe("Basic Rendering", () => {
    it("Renders correctly with no result or spinner", () => {
        target = render(<Calculator isBusy={false} result={''} calculate={calculateMock}/>)

        expect(target.getByTestId('input1')).toHaveValue(0);
        expect(target.getByTestId('input2')).toHaveValue(0);
        expect(target.getByTestId('latestResult')).toHaveTextContent('');
        expect(target.queryAllByTestId('spinner')).toHaveLength(0);
    });

    it("Renders spinner", () => {
        target = render(<Calculator isBusy={true} result={''} calculate={calculateMock}/>)

        expect(target.queryAllByTestId('latestResult')).toHaveLength(0);
        expect(target.queryAllByTestId('spinner')).toHaveLength(1);
    });

    it("Renders with result", () => {
        target = render(<Calculator isBusy={false} result={'Some Result'} calculate={calculateMock}/>)

        expect(target.getByTestId('latestResult')).toHaveTextContent('Some Result');
        expect(target.queryAllByTestId('spinner')).toHaveLength(0);
    });
});

describe("Modifying Inputs", () => {
    let input1: HTMLInputElement, input2: HTMLInputElement;

    beforeEach(() => {
        target = render(<Calculator isBusy={false} result={''} calculate={calculateMock}/>);
        input1 = target.getByTestId('input1') as HTMLInputElement;
        input2 = target.getByTestId('input2') as HTMLInputElement;
    });

    [
        ["Add", "+"],
        ["Subtract", "-"],
        ["Multiply", "x"],
        ["Divide", "/"],
    ].forEach(([name, operator]) =>
        it(name, () => {
            fireEvent.change(input1, {target: {valueAsNumber: 10}});
            fireEvent.change(input2, {target: {valueAsNumber: 60}});

            fireEvent.click(target.getByText(operator));

            expect(calculateMock).toHaveBeenCalledWith(10, 60, expect.any(Function), operator);
        }));
});
