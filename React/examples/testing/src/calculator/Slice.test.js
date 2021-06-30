import {calculatorReducer as target} from "./Slice";
import {calculate} from "./Actions";

const noAction = { type: "NoActionType"};

describe("Calculator Reducer", () => {
    it("Creates empty state", () => {
        let expectedResult = {result: "", isBusy: false};

        expect(target(undefined, noAction)).toEqual(expectedResult);
    });

    it("Sets isBusy to true on calculation request", () => {
        const DUMMY_INITIAL_STATE = {result: "Previous", isBusy: false};

        let result = target(DUMMY_INITIAL_STATE, calculate.pending());

        expect(result).toEqual({result: "Previous", isBusy: true});
    });

    it("Sets the success payload as result and sets isBusy to false", () => {
        const DUMMY_INITIAL_STATE = {result: "Previous", isBusy: true};

        let result = target(DUMMY_INITIAL_STATE, calculate.fulfilled(42));

        expect(result).toEqual({result: "42", isBusy: false});
    });

    it("Sets the failure payload as result and sets isBusy to false", () => {
        const DUMMY_INITIAL_STATE = {result: "Previous", isBusy: true};

        let result = target(DUMMY_INITIAL_STATE, calculate.rejected(new Error("Some error")));

        expect(result).toEqual({result: "Some error", isBusy: false});
    });
});
