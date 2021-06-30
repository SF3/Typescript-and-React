import {createReducer} from "@reduxjs/toolkit";
import {initialNumberState} from "./NumberState";
import {decrementAction, incrementAction} from "./NumberActions";

export const numberReducer = createReducer(
    initialNumberState, builder => {
        builder.addCase(incrementAction, (state, action) => {
            state.result += action.payload;
        });
        builder.addCase(decrementAction, (state, action) => {
            state.result -= action.payload;
        });
    });
