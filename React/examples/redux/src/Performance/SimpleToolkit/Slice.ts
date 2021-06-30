import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {range} from "../Range";
import {componentCount, State} from "../State";

const slice = createSlice({
    name: 'app',
    initialState: {
        values: range(componentCount),
        adjustmentAmount: 1
    } as State,
    reducers: {
        adjustmentChanged(state: State, action: PayloadAction<number>) {
            state.adjustmentAmount = action.payload;
        },
        valueIncremented(state: State, action: PayloadAction<number>) {
            state.values[action.payload] += state.adjustmentAmount;
        },
        valueDecremented(state: State, action: PayloadAction<number>) {
            state.values[action.payload] -= state.adjustmentAmount;
        },
        allIncremented(state: State, action: PayloadAction) {
            for (let ii = 0; ii < state.values.length; ii++) {
                state.values[ii] += state.adjustmentAmount;
            }
        }
    }
});

export const {
    adjustmentChanged,
    valueDecremented,
    valueIncremented,
    allIncremented
} = slice.actions;

export const reducer = slice.reducer;
