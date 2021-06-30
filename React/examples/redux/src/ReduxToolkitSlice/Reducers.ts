import {combineReducers} from "redux";
import {numberReducer} from "./Number/NumberSlice";
import {textReducer} from "./Text/TextSlice";

export const reducers = combineReducers({
    numberFeature: numberReducer,
    textFeature: textReducer,
});

export type State = ReturnType<typeof reducers>;
