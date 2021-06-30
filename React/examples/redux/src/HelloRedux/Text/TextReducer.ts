import {initialTextState} from "./TextState";
import {TextAction} from "./TextActions";

export const textReducer = (state = initialTextState, action: TextAction) => {
    console.log("Text reducer called with state of ", JSON.stringify(state));
    console.log("\tand action of ", JSON.stringify(action));

    switch (action.type) {
        case 'PREPEND': return { message: action.text + state.message};
        case 'APPEND': return { message: state.message + action.text};
        default: return state;
    }
};
