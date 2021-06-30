import React from "react";
import {CalculatorApp} from "./CalculatorApp";
import {render} from '@testing-library/react';

jest.mock("../calculator/Calculator", () => () => 'Calculator');
jest.mock("../history/History", () => () => 'History');

describe("Renders App Correctly", () => {
    it("Renders correct snapshot", () => {
        const target = render(
            <CalculatorApp/>
        );

        expect(target.container.firstChild).toMatchSnapshot();
    });
});
