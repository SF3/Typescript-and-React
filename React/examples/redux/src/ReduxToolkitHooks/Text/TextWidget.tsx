import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {append, prepend} from "./TextSlice";
import {State} from "../Reducers";

export default () => {
    const message = useSelector((state: State) => state.textFeature.message);

    const dispatch = useDispatch();
    const prependHandler = () => dispatch(prepend("abc"));
    const appendHandler = () => dispatch(append("xyz"));

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={prependHandler}>Prepend</button>
                <button className="btn btn-primary" onClick={appendHandler}>Append</button>
            </div>
            <div className="lead">{message}</div>
        </div>);
};
