import {Sequence} from "./Sequences";

export const switchSequence = (sequenceName: Sequence) => ({
    type: 'SWITCH_SEQUENCE',
    sequenceName
});

// TODO 1a - Write an action creator for Adding a number
//          The reducer for this action has already been written
//          Look at it to see which 'type' to use

// TODO 2a - Write an action creator for Removing a number

// TODO 3b - Write an action creator for Toggling showing the total
