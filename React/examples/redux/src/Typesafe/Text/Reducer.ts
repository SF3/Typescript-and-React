import {TextAction, TextActions} from "./Types";
import {getType, StateType} from "typesafe-actions";

export const textReducer =
    (state = {message: ''}, action: TextAction) => {
        switch (action.type) {
            case getType(TextActions.prepend):
                return {message: "AAA" + state.message};
            case getType(TextActions.append):
                return {message: state.message + "ZZZ"};
            default:
                return state;
        }
    };

export type TextState = StateType<typeof textReducer>;
