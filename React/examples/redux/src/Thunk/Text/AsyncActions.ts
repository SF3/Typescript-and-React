import {Dispatch} from "redux";
import {TextAction} from "./Types";
import {prepend} from "./Actions";

export const prependAsync = () => (dispatch: Dispatch<TextAction>) => {
    dispatch(prepend.request());

    return new Promise((resolve) => {
        setTimeout(
            () => resolve(dispatch(prepend.success("AAA"))),
            2000
        );
    });
};
