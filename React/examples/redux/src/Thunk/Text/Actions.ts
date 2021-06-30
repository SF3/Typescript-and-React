import {createAction, createAsyncAction} from "typesafe-actions";

export const prepend =
    createAsyncAction(
        "text/PREPEND_REQUEST",
        "text/PREPEND_SUCCESS",
        "text/PREPEND_FAILURE",
    )<void, string, string>();

export const append = createAction("text/APPEND")();

