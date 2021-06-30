import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootAction} from "../Types";
import {State} from "../Reducers";
import {TextActions} from "./Types";
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

const mapStateToProps: (state: State) => StateProps =
    (state: State) => ({
        message: state.textFeature.message
    });

const mapDispatchToProps: (_: Dispatch<RootAction>) => DispatchProps =
    dispatch =>
        bindActionCreators({
            ...TextActions
        }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
