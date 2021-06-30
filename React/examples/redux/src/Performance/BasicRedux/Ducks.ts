import {PayloadAction, Reducer} from "@reduxjs/toolkit";
import {range} from "../Range";
import {componentCount, State} from "../State";
import {createAction, getType} from "typesafe-actions";

const initialState: State = {
    values: range(componentCount),
    adjustmentAmount: 1
};

export const adjustmentChanged = createAction('app/ADJUSTMENT_CHANGED')<number>();
export const valueIncremented = createAction('app/ADJUSTMENT_INC')<number>();
export const valueDecremented = createAction('app/ADJUSTMENT_DEC')<number>();

export const reducer: Reducer<State, PayloadAction<number>> =
    (state = initialState, action: PayloadAction<number>) => {
        switch (action.type) {
            case getType(adjustmentChanged):
                return {
                    ...state,
                    adjustmentAmount: action.payload
                };
            case getType(valueIncremented): {
                const newValues = state.values.slice();
                newValues[action.payload] += state.adjustmentAmount;
                return {
                    ...state,
                    values: newValues
                };
            }
            case getType(valueDecremented): {
                const newValues = state.values.slice();
                newValues[action.payload] -= state.adjustmentAmount;
                return {
                    ...state,
                    values: newValues
                };
            }
            default:
                return state;
        }
    };
