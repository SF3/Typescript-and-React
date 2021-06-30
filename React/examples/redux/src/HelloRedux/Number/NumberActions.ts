import {ActionCreator} from "redux";

export interface NumberAction {
    type: string
    value: number
}

export const incrementAction: ActionCreator<NumberAction> =
    (amount: number) => {
        return {
            type: 'INC',
            value: amount
        }
    };

export const decrementAction: ActionCreator<NumberAction> =
    (amount: number) => ({
        type: 'DEC',
        value: amount
    });
