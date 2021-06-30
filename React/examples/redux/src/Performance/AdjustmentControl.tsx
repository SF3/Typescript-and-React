import React, {FC} from "react";
import {connect, MapStateToProps} from "react-redux";
import {State} from "./State";
import {adjustmentChanged} from "./SimpleToolkit/Slice";

interface StateProps {
    adjustmentAmount: number;
}

interface DispatchProps {
    adjustmentChanged(amount: number): void
}

type Props = StateProps & DispatchProps;

const AdjustmentControl: FC<Props> = ({adjustmentAmount, adjustmentChanged}) =>
    <div>
        <label>{adjustmentAmount}</label>
        <input type="range" value={adjustmentAmount}
               onChange={e => adjustmentChanged(Number(e.target.value))}/>;
    </div>

const mapState: MapStateToProps<StateProps, {}, State> = (state: State) => ({
    adjustmentAmount: state.adjustmentAmount
});

const mapDispatch: DispatchProps = {
    adjustmentChanged: adjustmentChanged
};

export default connect(mapState, mapDispatch)(AdjustmentControl);
