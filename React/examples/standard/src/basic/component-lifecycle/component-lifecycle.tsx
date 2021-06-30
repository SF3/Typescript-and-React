import * as React from "react";
import {Component} from "react";

interface Props {
    name: string;
}

interface State {
    secondsElapsed: number;
}

class Ticker extends Component<Props, State> {
    private interval = 0;

    constructor(props: Props) {
        super(props);
        this.state = {secondsElapsed: 0};
    }

    componentDidMount() {
        // Call 'tick' every second.
        this.interval = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // Stop calling 'tick' every second.
        window.clearInterval(this.interval);
    }

    tick() {
        console.log("Tick...");
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Page open {this.state.secondsElapsed} seconds.</p>
            </div>
        );
    }
}

export const ComponentLifecycleExample = () =>
    <Ticker name="Fred"/>;
