import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NumberState {
    result: number;
}

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        result: 100
    } as NumberState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.result += action.payload;
        },
        decrement(state, action: PayloadAction<number>) {
            state.result -= action.payload;
        }
    }
});

export const numberReducer = numberSlice.reducer;

export const {
    decrement,
    increment
} = numberSlice.actions;
