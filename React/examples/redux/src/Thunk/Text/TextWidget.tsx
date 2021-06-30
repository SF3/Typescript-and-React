import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootAction} from "../Types";
import {State} from "../Reducers";
import {TextActions} from "./Types";
import {prependAsync} from "./AsyncActions";
import {FC} from "react";

interface DispatchProps {
    prepend: () => void;
    append: () => void;
}

interface StateProps {
    message: string,
    isLoading: boolean
}

type Props = DispatchProps & StateProps;

const TextWidget: FC<Props> = (props) => {
    return <div>
        <div>
            <button disabled={props.isLoading} className="btn btn-primary" onClick={props.prepend}>Prepend</button>
            <button disabled={props.isLoading} className="btn btn-primary" onClick={props.append}>Append</button>
        </div>
        <div className="lead">
            {props.isLoading ? <span className="fa fa-circle-o-notch fa-spin"/> : null}
            {props.message}
        </div>
    </div>;
};

const mapStateToProps: (state: State) => StateProps =
    (state: State) => ({
        message: state.textFeature.message,
        isLoading: state.textFeature.isLoading
    });

const mapDispatchToProps: (_: Dispatch<RootAction>) => DispatchProps = dispatch =>
    bindActionCreators({
        prepend: prependAsync,
        append: TextActions.append
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
