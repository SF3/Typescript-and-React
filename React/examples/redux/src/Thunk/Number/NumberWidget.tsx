import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {NumberActions} from "./Types";
import {RootAction} from "../Types";
import {State} from "../Reducers";
import {decrementAsync} from "./AsyncActions";
import {FC} from "react";

interface DispatchProps {
    increment: () => void;
    decrement?: () => void;
}

interface StateProps {
    result: number,
    isLoading: boolean
}

type Props = DispatchProps & StateProps;

const NumberWidget: FC<Props> = (props) => {
    return <div>
        <div>
            <button disabled={props.isLoading} className="btn btn-primary" onClick={props.increment}>Increment</button>
            <button disabled={props.isLoading} className="btn btn-primary" onClick={props.decrement}>Decrement</button>
        </div>
        <div className="lead">
            {props.result}
            {props.isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
    </div>;
};

const mapStateToProps: (state: State) => StateProps =
    (state: State) => ({
        result: state.numberFeature.result,
        isLoading: state.numberFeature.isLoading
    });

const mapDispatchToProps: (_: Dispatch<RootAction>) => DispatchProps = dispatch =>
    bindActionCreators({
        increment: () => NumberActions.increment(13),
        decrement: () => decrementAsync(7),
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidget);
