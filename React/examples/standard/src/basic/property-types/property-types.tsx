import * as React from "react";
import {Component} from "react";

interface Props {
    children: any;
    color: string;
    fontSize: string;
    prefix?: string;
}

class Message extends Component<Props> {
    static defaultProps = {
        color: "blue",
        fontSize: "12px"
    };

    render() {
        const style = {
            color: this.props.color,
            fontSize: this.props.fontSize
        };

        return <h1 style={style}>{this.props.prefix} {this.props.children}</h1>;
    }
}

export const PropTypesExample = () => (
    <div>
        <Message color="red" fontSize="36px">Hello - This is red and large</Message>
        <Message>This defaulted to blue and small</Message>
        <Message prefix="***">This defaulted to blue and small</Message>
        {/*<Message color={36}>This one is invalid</Message>*/}
        {/*<Message/> /!* This is invalid because children is undefined *!/*/}
    </div>
);
