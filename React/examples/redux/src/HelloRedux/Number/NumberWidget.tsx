import {FC} from "react";
import * as React from 'react';
import {Dispatch} from "redux";
import {decrementAction, incrementAction} from "./NumberActions";
import {connect} from "react-redux";
import {State} from "../State";

interface DispatchProps {
    increment: () => void;
    decrement: () => void;
}

interface StateProps {
    readonly result: number
}

type Props = DispatchProps & StateProps;

const NumberWidget: FC<Props> = (props) => {
    return <div>
        <div>
            <button className="btn btn-primary" onClick={props.increment}>Increment</button>
            <button className="btn btn-primary" onClick={props.decrement}>Decrement</button>
        </div>
        <div className="lead">{props.result}</div>
    </div>;
};

const mapStateToProps = (state: State) => ({
    result: state.numberFeature.result
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(incrementAction(4)),
    decrement: () => dispatch(decrementAction(3)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidget);
