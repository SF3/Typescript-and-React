import * as React from "react";
import {Component} from "react";

interface Props {
    initialValue: number;
}

interface State {
    counter: number;
}

class CounterOuter extends Component<Props, State> {
    renderCount = 0;

    constructor(props: Props) {
        super(props);
        this.state = {counter: Number(props.initialValue)};
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    render() {
        this.renderCount++;

        return <div className='border p-2'>
            <h2>Outer</h2>
            <button onClick={this.incrementCounter}>Increment</button>
            <span className="ml-2 badge badge-info">{this.state.counter}</span>
            <div>
                Render Count: {this.renderCount}
            </div>

            <div className='ml-5'>
                <CounterInner initialValue={100}/>
            </div>
        </div>;
    }
}

class CounterInner extends Component<Props, State> {
    renderCount = 0;

    constructor(props: Props) {
        super(props);
        this.state = {counter: Number(props.initialValue)};
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };

    render() {
        this.renderCount++;

        return <div className='bg-light border p-2'>
            <h2>Inner</h2>
            <button onClick={this.incrementCounter}>Increment</button>
            <span className="ml-2 badge badge-info">{this.state.counter}</span>
            <div>
                Render Count: {this.renderCount}
            </div>
        </div>;
    }
}


export const RenderVsConstructExample = () => (
    <div>
        <CounterOuter initialValue={0}/>
    </div>
);
