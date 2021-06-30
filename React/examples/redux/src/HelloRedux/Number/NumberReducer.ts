import {initialNumberState} from "./NumberState";
import {NumberAction} from "./NumberActions";

export const numberReducer = (state = initialNumberState,
                              action: NumberAction) => {
    console.log("Number reducer called with state of ", state);
    console.log("\tand action of ", action);

    switch (action.type) {
        case 'INC':
            return {
                result: state.result + action.value
            };
        case 'DEC':
            return {
                result: state.result - action.value
            };
        default:
            return state;
    }
};
