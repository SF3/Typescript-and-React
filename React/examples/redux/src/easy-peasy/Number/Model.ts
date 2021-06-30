import {action, Action, thunk, Thunk} from "easy-peasy";

export interface NumberModel {
    result: number;
    isLoading: boolean;
    setLoading: Action<NumberModel, boolean>;
    increment: Action<NumberModel, number>;
    decrement: Action<NumberModel, number>;
    onDecrement: Thunk<NumberModel, number>;
}

export const numberModel: NumberModel = {
    result: 100,
    isLoading: false,
    setLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    increment: action((state, payload) => {
        state.result += payload;
    }),
    decrement: action((state, payload) => {
        state.result -= payload;
    }),
    onDecrement: thunk((actions, payload) => {
        return new Promise(resolve => {
            actions.setLoading(true);
            setTimeout(() => {
                actions.decrement(payload);
                actions.setLoading(false);
                resolve()
            }, 2000);
        });
    })
};
