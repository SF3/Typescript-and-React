import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type HistoryState = string[];

const slice = createSlice({
    name: 'log',
    initialState: [] as HistoryState,
    reducers: {
        add(state: HistoryState, action: PayloadAction<string>): void {
            state.push(action.payload);
        },
        clear(): HistoryState {
            return [];
        }
    }
});

export const {
    add,
    clear
} = slice.actions;

export const historyReducer = slice.reducer;

