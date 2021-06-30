import {ActionCreator} from "redux";

export interface TextAction {
    type: string
    text: string
}

export const prependAction: ActionCreator<TextAction> =
    (text: string) => {
        return {
            type: 'PREPEND',
            text
        }
    };

export const appendAction: ActionCreator<TextAction> =
    (text: string) => {
        return {
            type: 'APPEND',
            text
        }
    };
