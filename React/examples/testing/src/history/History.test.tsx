import React from "react";
import {History} from "./History";
import {render} from "@testing-library/react";
import {fireEvent} from "@testing-library/dom";

const clearMock = jest.fn();

beforeEach(() => {
    jest.resetAllMocks();
})

describe("Renders History Correctly", () => {
    it("Renders correct snapshot with empty log", () => {
        const target = render(
            <History log={[]} clearLog={clearMock}/>
        );

        expect(target.container.firstChild).toMatchSnapshot();
    });

    it("Renders correctly with log", () => {
        const target = render(
            <History log={["First", "Second"]} clearLog={clearMock}/>
        );

        expect(target.container.firstChild).toMatchSnapshot();
    });

    it("Calls clear function when button clicked", () => {
        const target = render(
            <History log={[]} clearLog={clearMock}/>
        );

        fireEvent.click(target.getByTestId('clear-button'));

        expect(clearMock).toHaveBeenCalled();
    });
});
