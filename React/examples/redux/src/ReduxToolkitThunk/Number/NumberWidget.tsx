import * as React from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {increment} from "./NumberSlice";
import {decrementAsync} from "./Thunk";
import {FC} from "react";
import {State} from "../Reducers";

interface DispatchProps {
    increment: () => void;
    decrement: () => void;
}

interface StateProps {
    result: number,
    isLoading: boolean
}

type Props = DispatchProps & StateProps;

const NumberWidget: FC<Props> = ({decrement, increment, isLoading, result}) =>
    <div>
        <div>
            <button disabled={isLoading} className="btn btn-primary" onClick={increment}>Increment</button>
            <button disabled={isLoading} className="btn btn-primary" onClick={decrement}>Decrement</button>
        </div>
        <div className="lead">
            {result}
            {isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
    </div>;

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
    result: state.numberFeature.result,
    isLoading: state.numberFeature.isLoading
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    increment: () => increment(4),
    decrement: () => decrementAsync(3),
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberWidget);
