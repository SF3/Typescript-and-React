import {action, Action, thunk, Thunk} from "easy-peasy";

export interface TextModel {
    message: string;
    isLoading: boolean;
    setLoading: Action<TextModel, boolean>;
    prepend: Action<TextModel, string>;
    append: Action<TextModel, string>;
    onPrepend: Thunk<TextModel, string>;
}

export const textModel: TextModel = {
    message: "",
    isLoading: false,
    setLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    prepend: action((state, payload) => {
        state.message = payload + state.message;
    }),
    append: action((state, payload) => {
        state.message += payload;
    }),
    onPrepend: thunk((actions, payload) => {
        return new Promise(resolve => {
            actions.setLoading(true);
            setTimeout(() => {
                actions.prepend(payload);
                actions.setLoading(false);
                resolve()
            }, 2000);
        });
    })
};
