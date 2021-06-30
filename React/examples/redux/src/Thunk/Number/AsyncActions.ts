import {Dispatch} from "redux";
import {decrement} from "./Actions";
import {NumberAction} from "./Types";

export const decrementAsync = (value: number) => (dispatch: Dispatch<NumberAction>) => {
    dispatch(decrement.request());

    return new Promise((resolve) => {
        setTimeout(
            () => resolve(dispatch(decrement.success(value))),
            1000);
    });
};
