import {NumberAction, NumberActions} from "./Types";
import {getType, StateType} from "typesafe-actions";

export const numberReducer =
    (state = {result: 100, isLoading: false}, action: NumberAction) => {
        console.log("Number reducer called with state of ", state);
        console.log("\tand action of ", action);

        switch (action.type) {
            case getType(NumberActions.increment):
                return {...state, result: state.result + action.payload};
            case getType(NumberActions.decrement.request):
                return {
                    ...state,
                    isLoading: true
                };
            case getType(NumberActions.decrement.success):
                return {
                    result: state.result - action.payload,
                    isLoading: false
                };
            default:
                return state;
        }
    };

export type NumberState = StateType<typeof numberReducer>;
