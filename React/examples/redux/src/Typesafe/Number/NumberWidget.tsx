import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {NumberActions} from "./Types";
import {RootAction} from "../Types";
import {State} from "../Reducers";
import {FC} from "react";

interface DispatchProps {
    increment: () => void;
    decrement: () => void;
}

interface StateProps {
    result: number
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

const mapStateToProps: (state: State) => StateProps =
    (state: State) => ({
        result: state.numberFeature.result
    });

const mapDispatchToProps: (_: Dispatch<RootAction>) => DispatchProps = dispatch =>
    bindActionCreators({
        increment: () => NumberActions.increment(13),
        decrement: () => NumberActions.decrement(7),
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidget);
