import {createAsyncAction, createAction} from "typesafe-actions";

export const increment = createAction("number/INC")<number>();

export const decrement = createAsyncAction(
    "number/DEC_REQUEST",
    "number/DEC_SUCCESS",
    "number/DEC_FAILURE",
)<void, number, string>();
