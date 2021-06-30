import {createSlice} from "@reduxjs/toolkit";
import {prependAsync} from "./Thunk";

interface TextState {
    message: string;
    isLoading: boolean;
}

const textSlice = createSlice({
    name: 'text',
    initialState: {
        message: '',
        isLoading: false
    } as TextState,
    reducers: {
        append(state, action) {
            state.message += action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(prependAsync.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(prependAsync.fulfilled, (state, action) => {
            state.message = action.payload + state.message;
            state.isLoading = false;
        });
        builder.addCase(prependAsync.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const textReducer = textSlice.reducer;

export const {
    append
} = textSlice.actions;
