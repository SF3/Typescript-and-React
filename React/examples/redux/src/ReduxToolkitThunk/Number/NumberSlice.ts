import {createSlice} from "@reduxjs/toolkit";
import {decrementAsync} from "./Thunk";

interface NumberState {
    result: number;
    isLoading: boolean;
}

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        result: 100,
        isLoading: false
    } as NumberState,
    reducers: {
        increment(state, action) {
            state.result += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(decrementAsync.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(decrementAsync.fulfilled, (state, action) => {
            state.result -= action.payload;
            state.isLoading = false;
        });
        builder.addCase(decrementAsync.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const numberReducer = numberSlice.reducer;

export const {
    increment
} = numberSlice.actions;
