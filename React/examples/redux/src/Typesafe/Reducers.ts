import {combineReducers} from "redux";
import {numberReducer} from "./Number/Reducer";
import {textReducer} from "./Text/Reducer";
import {StateType} from "typesafe-actions";

export const reducers = combineReducers({
    numberFeature: numberReducer,
    textFeature: textReducer,
});

export type State = StateType<typeof reducers>;
