import {sequence, Sequence} from "./Sequences";

export interface State {
    sequenceName: Sequence;
    length: number;
    sequence: number[];
}

export const initialState: State = {
    sequenceName: 'Linear',
    length: 8,
    sequence: sequence('Linear', 8),
    // TODO 4a - Add state to control show/hide total
};
