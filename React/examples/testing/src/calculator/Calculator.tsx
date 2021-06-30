import React, {ChangeEventHandler, FC, useState} from "react";
import CalculationProcessor, {CalculationFunction} from "../services/CalculationProcessor";
import {calculate} from "./Actions";
import {connect} from "react-redux";
import {RootState} from "../State";

const calculator = new CalculationProcessor();
const buttonStyle = "btn btn-primary m-1 font-weight-bold";

interface StateProps {
    isBusy: boolean;
    result: string;
}

interface DispatchProps {
    calculate: (input1: number, input2: number, operation: CalculationFunction, operator: string) => void;
}

type Props = StateProps & DispatchProps;

export const Calculator: FC<Props> = ({calculate, isBusy, result}) => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    const updateField1: ChangeEventHandler<HTMLInputElement> = (e) => setInput1(e.target.valueAsNumber);
    const updateField2: ChangeEventHandler<HTMLInputElement> = (e) => setInput2(e.target.valueAsNumber);

    const add = () => calculate(input1, input2, calculator.add, "+");
    const subtract = () => calculate(input1, input2, calculator.subtract, "-");
    const multiply = () => calculate(input1, input2, calculator.multiply, "x");
    const divide = () => calculate(input1, input2, calculator.divide, "/");

    return <div className="card bg-light p-3">
        <div className="form">
            <div className="form-group">
                <label htmlFor="input1">Input 1: </label>
                <input type="number" data-testid="input1"
                       disabled={isBusy}
                       value={input1}
                       onChange={updateField1}/>
            </div>
            <div className="form-group">
                <label htmlFor="input2">Input 2: </label>
                <input type="number" data-testid="input2"
                       disabled={isBusy}
                       value={input2}
                       onChange={updateField2}/>
            </div>
        </div>
        <div>
            <button disabled={isBusy} className={buttonStyle} onClick={add}>+</button>
            <button disabled={isBusy} className={buttonStyle} onClick={subtract}>-</button>
            <button disabled={isBusy} className={buttonStyle} onClick={multiply}>x</button>
            <button disabled={isBusy} className={buttonStyle} onClick={divide}>/</button>
        </div>
        <h1>
            {isBusy
                ? <span className="fa fa-circle-o-notch fa-spin" data-testid="spinner"/>
                : <span data-testid="latestResult">{result}</span>}
        </h1>
    </div>;
}

const mapState = (state: RootState) => ({
    result: state.calculator.result,
    isBusy: state.calculator.isBusy
});

const mapDispatch: DispatchProps = {
    calculate: (input1, input2, operation, operator) => calculate({
        input1, input2, operation, operator
    })
};

export default connect(mapState, mapDispatch)(Calculator);
