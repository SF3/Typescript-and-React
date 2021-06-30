// import {Component} from "react";
import * as React from "react";
import {ChangeEvent, PureComponent} from "react";
import {Set} from "immutable";

interface Props {
    startText: string;
}

interface State {
    text: string;
    values: Set<string>;
}

const sectionStyle = {
    border: 'thin solid black',
    width: '50%', padding: '1em'
};

class MyWidget extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: props.startText,
            values: Set<string>()
        };
    }

    onClick = () => {
        this.setState({
            values: this.state.values.add(this.state.text),
        });
    };

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: e.target.value
        });
    };

    concatenateValues(values: Set<string>): string {
        return values.reduce((a, b) => a + "-" + b);
    }

    render() {
        const date = new Date().toLocaleTimeString();
        return (
            <section style={sectionStyle}>
                <h4>Type in new text:</h4>
                <div>
                    <input type="text"
                           onChange={this.onChange}
                           value={this.state.text}/>
                    <button onClick={this.onClick}>Push To Update</button>
                </div>
                <div>
                    Current state:
                    <mark>{this.concatenateValues(this.state.values)}</mark>
                </div>
                <div><i>Rendered at {date}</i></div>
            </section>
        );
    }
}

export const PureComponentExample = () => (
    <div>
        <MyWidget startText="foo"/>
        <hr/>
        <MyWidget startText="wibble"/>
    </div>
);
