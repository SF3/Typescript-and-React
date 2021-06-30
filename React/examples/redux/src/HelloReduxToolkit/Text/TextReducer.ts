import {initialTextState} from "./TextState";
import {createReducer} from "@reduxjs/toolkit";
import {appendAction, prependAction} from "./TextActions";

export const textReducer = createReducer(
    initialTextState, builder => {
        builder.addCase(prependAction, (state, action) => {
            return {message: action.payload + state.message};
        });
        builder.addCase(appendAction, (state, action) => {
            return {message: state.message + action.payload};
        });
    });
