import React, {FC} from 'react';
import ValuesTableRow from "./ValuesTableRow";
import {connect, MapStateToProps} from "react-redux";
import {State} from "../State";
import {range} from "../Range";

interface StateProps {
    count: number;
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps;

const ValuesTable: FC<Props> = (props) => (
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
                range(props.count).map(index =>
                    <ValuesTableRow key={index}
                                    index={index}/>)
            }</tbody>
        </table>
    </div>
);

const mapState: MapStateToProps<StateProps, {}, State> = (state: State) => ({
    count: state.values.length,
});

const mapDispatch: DispatchProps = {
};

export default connect(mapState, mapDispatch)(ValuesTable);
