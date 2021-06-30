import * as React from "react";
import {Component} from "react";

let index = 1;

interface Props {
    id: string;
}

const logObjectDetails = (obj: any) => {
    console.log(`Object index   = ${index++}`);
    console.log(`Object         = ${obj}`);
    console.log("================================");
};

class Message extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log(`*** Creating component ${this.props.id}`);
    }

    componentDidMount() {
        console.log(`*** Component ${this.props.id} mounted`);
    }

    render() {
        return <h1 ref={logObjectDetails}>{this.props.children}</h1>;
    }
}

export const AccessingDomExample = () => (
    <div>
        <Message id="one" ref={logObjectDetails}>First element</Message>
        <Message id="two" ref={logObjectDetails}>Second element</Message>
    </div>
);
