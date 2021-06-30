import * as React from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FC} from "react";
import {State} from "../Reducers";
import { append, prepend } from './TextSlice';

interface DispatchProps {
    prepend: () => void;
    append: () => void;
}

interface StateProps {
    message: string
}

type Props = DispatchProps & StateProps;

const TextWidget: FC<Props> = (props) => (
    <div>
        <div>
            <button className="btn btn-primary" onClick={props.prepend}>Prepend</button>
            <button className="btn btn-primary" onClick={props.append}>Append</button>
        </div>
        <div className="lead">{props.message}</div>
    </div>);

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
    message: state.textFeature.message
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
    prepend: () => dispatch(prepend("abc")),
    append: () => dispatch(append("xyz")),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
