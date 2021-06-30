import {createAction} from "typesafe-actions";

export const prepend = createAction("text/PREPEND")();
export const append = createAction("text/APPEND")();
