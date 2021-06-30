import React, {ChangeEvent, Component} from "react";
import CalculationProcessor, {CalculationFunction} from "../services/CalculationProcessor";

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

interface State {
    input1: number;
    input2: number;
}

export class CalculatorClass extends Component<Props, State> {
    state = {input1: 0, input2: 0};

    updateField = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, valueAsNumber} = e.target;
        if (id in this.state) {
            this.setState(prevState => ({
                ...prevState,
                [id]: valueAsNumber
            }));
        }
    };

    add = () => this.props.calculate(this.state.input1, this.state.input2, calculator.add, "+");
    subtract = () => this.props.calculate(this.state.input1, this.state.input2, calculator.subtract, "-");
    multiply = () => this.props.calculate(this.state.input1, this.state.input2, calculator.multiply, "x");
    divide = () => this.props.calculate(this.state.input1, this.state.input2, calculator.divide, "/");

    render() {
        return <div className="card bg-light p-3">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="input1">Input 1: </label>
                    <input type="number" data-testid="input1"
                           disabled={this.props.isBusy}
                           value={this.state.input1}
                           onChange={this.updateField}/>
                </div>
                <div className="form-group">
                    <label htmlFor="input2">Input 2: </label>
                    <input type="number" data-testid="input2"
                           disabled={this.props.isBusy}
                           value={this.state.input2}
                           onChange={this.updateField}/>
                </div>
            </div>
            <div>
                <button disabled={this.props.isBusy} className={buttonStyle} onClick={this.add}>+</button>
                <button disabled={this.props.isBusy} className={buttonStyle} onClick={this.subtract}>-</button>
                <button disabled={this.props.isBusy} className={buttonStyle} onClick={this.multiply}>x</button>
                <button disabled={this.props.isBusy} className={buttonStyle} onClick={this.divide}>/</button>
            </div>
            <h1>
                {this.props.isBusy
                    ? <span data-testid="spinner" className="fa fa-circle-o-notch fa-spin"/>
                    : <span data-testid="latestResult">{this.props.result}</span>}
            </h1>
        </div>;
    }
}
