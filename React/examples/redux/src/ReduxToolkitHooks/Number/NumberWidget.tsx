import * as React from 'react';
import {decrement, increment} from "./Slice";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../Reducers";

export default () => {
    const result = useSelector((state: State) => state.numberFeature.result);
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch(increment(4));
    const decrementHandler = () => dispatch(decrement(3));

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={incrementHandler}>Increment</button>
                <button className="btn btn-primary" onClick={decrementHandler}>Decrement</button>
            </div>
            <div className="lead">{result}</div>
        </div>);
};
