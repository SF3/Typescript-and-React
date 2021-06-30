import * as React from "react";
import {Component, FC} from "react";

interface Props {
    name: string;
}

const HelloMessage1: FC<Props> = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

class HelloMessage2 extends Component<Props> {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

export const PropsExample = () => (
    <div>
        <HelloMessage1 name="Fred"/>
        <HelloMessage2 name="Wilma"/>
    </div>
);
