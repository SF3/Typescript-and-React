import * as React from 'react';
import {FC} from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {append} from "./TextSlice";
import {prependAsync} from "./Thunk";
import {bindActionCreators} from "redux";
import {State} from "../Reducers";

interface DispatchProps {
    prepend: () => void;
    append: () => void;
}

interface StateProps {
    message: string;
    isLoading: boolean;
}

type Props = DispatchProps & StateProps;

const TextWidget: FC<Props> = ({append, isLoading, message, prepend}) => (
    <div>
        <div>
            <button disabled={isLoading} className="btn btn-primary" onClick={prepend}>Prepend</button>
            <button disabled={isLoading} className="btn btn-primary" onClick={append}>Append</button>
        </div>
        <div className="lead">
            {isLoading ? <span className="fa fa-circle-o-notch fa-spin"/> : null}
            {message}
        </div>
    </div>);

const mapStateToProps: MapStateToProps<StateProps, {}, State> =
    (state) => ({
        message: state.textFeature.message,
        isLoading: state.textFeature.isLoading
    });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch =>
    bindActionCreators({
        prepend: () => prependAsync('abc'),
        append: () => append('xyz'),
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
