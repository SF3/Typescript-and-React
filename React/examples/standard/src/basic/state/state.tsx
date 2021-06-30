import * as React from "react";
import {Component} from "react";

interface Props {
    initialValue: number;
}

interface State {
    counter: number;
}

class Counter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            counter: props.initialValue
        };
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return <div>
            <button onClick={this.incrementCounter}>Increment</button>
            <span className="badge badge-info ml-3">
                {this.state.counter}
            </span>
        </div>;
    }
}

export const StateExample = () => (
    <div>
        <Counter initialValue={0}/>
        <hr/>
        <Counter initialValue={100}/>
        <hr/>
        <Counter initialValue={1000}/>
    </div>
);
