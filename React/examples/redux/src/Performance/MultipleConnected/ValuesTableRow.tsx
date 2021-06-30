import React, {FC} from "react";
import {connect, MapStateToPropsFactory} from "react-redux";
import {State} from "../State";
import {valueDecremented, valueIncremented} from "../SimpleToolkit/Slice";

interface OwnProps {
    index: number;
}

interface StateProps {
    value: number;
}

interface DispatchProps {
    increment(index: number): void;
    decrement(index: number): void;
}

type Props = StateProps & DispatchProps & OwnProps;

const ValuesTableRow: FC<Props> = (({index, value, increment, decrement}) =>
    <tr>
        <td>{value}</td>
        <td><button className="btn btn-primary"
                    onClick={() => increment(index)} >Increment</button></td>
        <td><button className="btn btn-primary"
                    onClick={()  => decrement(index)} >Decrement</button></td>
    </tr>
);

const mapState: MapStateToPropsFactory<StateProps, OwnProps, State> = (_: State, ownProps: OwnProps) => {
    const index = ownProps.index;

    return state => ({
        value: state.values[index]
    });
};

const mapDispatch: DispatchProps = {
    increment: valueIncremented,
    decrement: valueDecremented,
};

export default connect(mapState, mapDispatch)(ValuesTableRow);
