import React from "react";
import {CalculatorClass as Calculator} from "./CalculatorClass";
import {shallow, ShallowWrapper} from "enzyme";

const noOp = () => {
};
const ids = {
    input1: "input[data-testid='input1']",
    input2: "input[data-testid='input2']",
    result: "span[data-testid='latestResult']",
    spinner: "span[data-testid='spinner']"
};

describe("Calculator", () => {
    describe("Basic Rendering", () => {
        const target = shallow(
            <Calculator result={""} isBusy={false}
                             calculate={jest.fn()}/>
        );

        it("Renders correctly with no result or spinner", () => {
            expect(target.find(ids.input1)).toHaveLength(1);
            expect(target.find(ids.input2)).toHaveLength(1);
            expect(target.find(ids.result).first().text()).toEqual("");
            expect(target.find(ids.spinner)).toHaveLength(0);
        });

        it("Renders spinner", () => {
            target.setProps({
                isBusy: true
            });

            expect(target.find(ids.result)).toHaveLength(0);
            expect(target.find(ids.spinner)).toHaveLength(1);
        });


        it("Renders with result", () => {
            target.setProps({
                result: "Message",
                isBusy: false
            });

            expect(target.find(ids.result)).toHaveLength(1);
            expect(target.find(ids.spinner)).toHaveLength(0);
            expect(target.find(ids.result).text()).toEqual("Message");
        });
    });

    describe("Modifying Inputs", () => {
        const component = shallow(
            <Calculator result={""} isBusy={false} calculate={jest.fn()}/>
        );

        it("Set Input 1", () => {
            component.setState({input1: 99});

            expect(component.find(ids.input1).first().props().value)
                .toEqual(99);
        });

        it("Set Input 2", () => {
            component.setState({input2: 123});

            expect(component.find(ids.input2).first().props().value)
                .toEqual(123);
        });
    });

    describe("Dispatches the correct operation", () => {
        let calculateMock: jest.Mock;
        let target: ShallowWrapper;

        function clickButton(operator: string) {
            target.find(`button[children='${operator}']`)
                .simulate("click");
        }

        beforeAll(() => {
            calculateMock = jest.fn()
            target = shallow(
                <Calculator result={""} isBusy={false} calculate={calculateMock}/>
            );
            target.setState({input1: 10, input2: 60});
        });

        [
            ["Add", "+"],
            ["Subtract", "-"],
            ["Multiply", "x"],
            ["Divide", "/"],
        ].forEach(([name, operator]) =>
            it(name, () => {
                clickButton(operator);

                expect(calculateMock).toHaveBeenCalledWith(10, 60, expect.any(Function), operator);
            }));
    });
});
