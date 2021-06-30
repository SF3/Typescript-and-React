import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TextState {
    message: string;
}

const textSlice = createSlice({
    name: 'text',
    initialState: {
        message: ''
    } as TextState,
    reducers: {
        prepend(state, action: PayloadAction<string>) {
            state.message = action.payload + state.message;
        },
        append(state, action: PayloadAction<string>) {
            state.message += action.payload;
        }
    }
});

export const textReducer = textSlice.reducer;

export const {
    append,
    prepend
} = textSlice.actions;
