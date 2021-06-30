import {createAction} from "typesafe-actions";

export const increment = createAction("number/INC")<number>();
export const decrement = createAction("number/DEC")<number>();
