import {combineReducers} from "@reduxjs/toolkit";
import {historyReducer} from "./history/Slice";
import {calculatorReducer} from "./calculator/Slice";

export const reducer = combineReducers({
  log: historyReducer,
  calculator: calculatorReducer
});

export type RootState = ReturnType<typeof reducer>;
