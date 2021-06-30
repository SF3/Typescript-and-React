import {calculate as target} from "./Actions";
import {add} from "../history/Slice";
import {PayloadAction} from "@reduxjs/toolkit";
import {PayloadErrorAction} from "../TypeHelpers";

const DUMMY_INPUT1 = 1;
const DUMMY_INPUT2 = 2;
const DUMMY_RESULT = 3;

const dispatch = jest.fn();
const getState = jest.fn();
const extra = {};

beforeEach(() => {
    jest.resetAllMocks();
});

it("should throw errors from operation", async () => {
    const FAILING_OP = jest.fn().mockRejectedValue("Some error");
    let calculation = {
        input1: DUMMY_INPUT1,
        input2: DUMMY_INPUT2,
        operation: FAILING_OP,
        operator: "test"
    };

    const result = await target(calculation)(dispatch, getState, extra) as PayloadErrorAction<number>;

    expect(result.type).toEqual(target.rejected.type)
    expect(result.error.message).toEqual("Some error");
    expect(FAILING_OP).toHaveBeenCalledWith(DUMMY_INPUT1, DUMMY_INPUT2);
});

it("should calculate asynchronously", async () => {
    const SUCCESSFUL_OP = jest.fn().mockResolvedValue(DUMMY_RESULT);
    const expectedLogMessage = `${DUMMY_INPUT1} test ${DUMMY_INPUT2} = ${DUMMY_RESULT}`;
    let calculation = {
        input1: DUMMY_INPUT1,
        input2: DUMMY_INPUT2,
        operation: SUCCESSFUL_OP,
        operator: "test"
    };

    const result = await target(calculation)(dispatch, getState, extra);

    expect(result.payload).toEqual(DUMMY_RESULT);
    expect(SUCCESSFUL_OP).toHaveBeenCalledWith(DUMMY_INPUT1, DUMMY_INPUT2);
    expect(dispatch).toHaveBeenCalledWith(add(expectedLogMessage));
});
