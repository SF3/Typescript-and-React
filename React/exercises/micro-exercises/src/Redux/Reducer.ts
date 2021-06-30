import {initialState, State} from "./State";
import {sequence} from "./Sequences";
import {AnyAction, Reducer} from "redux";

export const reducer: Reducer<State, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_SEQUENCE':
            let sequenceName = action.sequenceName;
            return {
                ...state,
                sequenceName,
                sequence: sequence(sequenceName, state.length)
            };
        case 'ADD': {
            const length = state.length + 1;
            return {
                ...state,
                length,
                sequence: sequence(state.sequenceName, length)
            };
        }

        // TODO 2b - Write a reduction case for removing a number

        // TODO 3c - Write a reduction case for toggling showing the total
        default:
            return state;
    }
};
