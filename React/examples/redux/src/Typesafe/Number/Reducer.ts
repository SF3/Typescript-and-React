import {NumberAction, NumberActions} from "./Types";
import {getType, StateType} from "typesafe-actions";

export const numberReducer =
    (state = {result: 100}, action: NumberAction) => {
        switch (action.type) {
            case getType(NumberActions.increment):
                return {result: state.result + action.payload};
            case getType(NumberActions.decrement):
                return {result: state.result - action.payload};
            default:
                return state;
        }
    };

export type NumberState = StateType<typeof numberReducer>;
