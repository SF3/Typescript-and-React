import React, {FC} from 'react';
import {ValuesTableRow} from "./ValuesTableRow";
import {connect, MapStateToProps} from "react-redux";
import {State} from "../State";
import { valueIncremented, valueDecremented } from './Slice';

interface StateProps {
    values: number[];
}

interface DispatchProps {
    increment(index: number): void;
    decrement(index: number): void;
}

type Props = StateProps & DispatchProps;

const ValuesTable: FC<Props> = ({values, increment, decrement}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Value</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{
                    values.map((x, index) =>
                        <ValuesTableRow key={index}
                                        index={index}
                                        value={x}
                                        increment={increment} decrement={decrement}/>)
                }</tbody>
            </table>
        </div>
    )
};

const mapState: MapStateToProps<StateProps, {}, State> = (state: State) => ({
    values: state.values,
});

const mapDispatch: DispatchProps = {
  increment: valueIncremented,
  decrement: valueDecremented,
};

export default connect(mapState, mapDispatch)(ValuesTable);
