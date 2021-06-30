import * as React from 'react';
import {decrementAction, incrementAction} from "./NumberActions";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FC} from "react";
import {State} from "../Reducers";

interface DispatchProps {
    increment: () => void;
    decrement: () => void;
}

interface StateProps {
    result: number;
}

type Props = DispatchProps & StateProps;

const NumberWidget: FC<Props> = (props) => (
    <div>
        <div>
            <button className="btn btn-primary" onClick={props.increment}>Increment</button>
            <button className="btn btn-primary" onClick={props.decrement}>Decrement</button>
        </div>
        <div className="lead">{props.result}</div>
    </div>);

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
    result: state.numberFeature.result
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
    increment: () => dispatch(incrementAction(4)),
    decrement: () => dispatch(decrementAction(3)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidget);
