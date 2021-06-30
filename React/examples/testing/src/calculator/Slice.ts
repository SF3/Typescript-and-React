import {calculate} from "./Actions";
import {createSlice} from "@reduxjs/toolkit";

interface CalculatorState {
    result: string;
    isBusy: boolean;
}

const slice = createSlice({
    name: 'calculator',
    initialState: {
        result: '',
        isBusy: false
    } as CalculatorState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(calculate.pending, (state) => {
            state.isBusy = true;
        });
        builder.addCase(calculate.fulfilled, (state, action) => {
            state.result = action.payload.toString();
            state.isBusy = false;
        });
        builder.addCase(calculate.rejected, (state, action) => {
            state.result = action.error.message ?? 'No Error Message';
            state.isBusy = false;
        });
    }
})

export const calculatorReducer = slice.reducer;
