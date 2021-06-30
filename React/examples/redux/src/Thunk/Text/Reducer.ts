import {TextAction, TextActions} from "./Types";
import {getType, StateType} from "typesafe-actions";

export const textReducer =
    (state = {message: '', isLoading: false}, action: TextAction) => {
        console.log("Number reducer called with state of ", state);
        console.log("\tand action of ", action);

        switch (action.type) {
            case getType(TextActions.prepend.request):
                return {...state, isLoading: true};
            case getType(TextActions.prepend.success):
                return {
                    message: action.payload + state.message,
                    isLoading: false
                };
            case getType(TextActions.append):
                return {...state, message: state.message + "ZZZ"};
            default:
                return state;
        }
    };

export type TextState = StateType<typeof textReducer>;
