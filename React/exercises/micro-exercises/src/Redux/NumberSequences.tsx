import React, {ChangeEvent, FC} from 'react'
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {switchSequence} from "./Actions";
import {Sequence} from "./Sequences";
import {State} from "./State";

const sequences: string[] = [
    'Linear',
    'Square',
    'Triangular',
    'Fibonacci'
];

interface StateProps {
    sequence: number[];
    sequenceName: Sequence;
}

interface DispatchProps {
    switchSequence: (e: ChangeEvent<HTMLSelectElement>) => void;
}

type Props = StateProps & DispatchProps;

const NumberSequences: FC<Props> = (props) => (
    <div>
        <div>
            <select value={props.sequenceName} onChange={props.switchSequence}>
                {sequences.map(x => <option key={x} value={x}>{x}</option>)}
            </select>
        </div>
        <div className='mt-2 mb-2'>
            {/* TODO 1c - Attach the add dispatcher to the Add button */}
            <button className='btn btn-primary'>Add</button>

            {/* TODO 2d - Attach the Remove dispatcher to the Remove button */}
            {/*           Disable the button when the length is equal to 1 */}
            <button className='btn btn-primary'>Remove</button>
        </div>

        {/* TODO 3e - Add a button and attach to dispatcher to toggle showing total */}

        <div>
            <ul>
                {props.sequence.map(x => <li key={x}>{x}</li>)}
            </ul>
        </div>

        {/* TODO 3f - Show the total if required */}

    </div>
);

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
    sequence: state.sequence,
    sequenceName: state.sequenceName,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
    switchSequence: (e: ChangeEvent<HTMLSelectElement>) => dispatch(switchSequence(e.target.value as Sequence)),
    // TODO 1b - map the Add Action creator to the props for the component
    // TODO 2c - map the Remove Action creator to the props for the component
    // TODO 3d - Write a reduction case for toggling showing the total
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberSequences)
