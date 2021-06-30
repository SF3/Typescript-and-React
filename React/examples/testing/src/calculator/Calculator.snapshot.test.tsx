import React from "react";
import {Calculator} from "./Calculator";
import {render} from "@testing-library/react";

describe("Calculator", () => {
    describe("Basic Rendering", () => {
        it("Renders correctly with no result or spinner", () => {
            const target = render(
                <Calculator result={""} isBusy={false} calculate={jest.fn()}/>
            );

            expect(target.container.firstChild).toMatchSnapshot();
        });

        it("Renders spinner", () => {
            const target = render(
                <Calculator result={""} isBusy={true} calculate={jest.fn()}/>
            );

            expect(target).toMatchSnapshot();
        });

        it("Renders with result", () => {
            const target = render(
                <Calculator result={"Some Result"} isBusy={false} calculate={jest.fn()}/>
            );

            expect(target).toMatchSnapshot();
        });
    });
});
