import * as React from "react";
import {Component} from "react";

interface State {
    counter: number;
}

class Counter extends Component<{}, State> {
    state = {counter: 0};

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
    };

    incrementCounterCorrect = () => {
        this.setState(state => ({counter: state.counter + 1}));
        this.setState(state => ({counter: state.counter + 1}));
        this.setState(state => ({counter: state.counter + 1}));
        this.setState(state => ({counter: state.counter + 1}));
        this.setState(state => ({counter: state.counter + 1}));
    };

    render() {
        return <div>
            <span className="ml-2 badge badge-info">{this.state.counter}</span>
            <div><button onClick={this.incrementCounter}>Increment by 5</button></div>
            <div><button onClick={this.incrementCounterCorrect}>Increment by 5 Via Func</button></div>
        </div>;
    }
}

export const BatchedStateExample = () => (
    <div>
        <Counter/>
    </div>
);
