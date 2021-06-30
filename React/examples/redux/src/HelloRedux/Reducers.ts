import {combineReducers} from "redux";
import {numberReducer} from "./Number/NumberReducer";
import {textReducer} from "./Text/TextReducer";

export const reducers = combineReducers({
    numberFeature: numberReducer,
    textFeature: textReducer,
});
