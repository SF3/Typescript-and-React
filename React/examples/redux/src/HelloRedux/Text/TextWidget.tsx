import * as React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {State} from "../State";
import {appendAction, prependAction} from "./TextActions";
import {FC} from "react";

interface DispatchProps {
    prepend: () => void;
    append: () => void;
}

interface StateProps {
    message: string
}

type Props = DispatchProps & StateProps;

const TextWidget: FC<Props> = (props) => {
    return <div>
        <div>
            <button className="btn btn-primary" onClick={props.prepend}>Prepend</button>
            <button className="btn btn-primary" onClick={props.append}>Append</button>
        </div>
        <div className="lead">{props.message}</div>
    </div>;
};

const mapStateToProps = (state: State) => ({
    message: state.textFeature.message
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    prepend: () => dispatch(prependAction("abc")),
    append: () => dispatch(appendAction("xyz")),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
