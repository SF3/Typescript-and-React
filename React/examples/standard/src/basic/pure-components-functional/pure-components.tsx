import * as React from "react";
import {ChangeEvent, Component, ComponentType} from "react";
import {Set} from "immutable";
import {InnerProps, InnerRender, MemoInnerRender, PureInnerRender} from "./pure-components-functional";

interface Props {
    startText: string;
    renderComponent: ComponentType<InnerProps>;
}

interface State {
    text: string;
    values: Set<string>;
}

class MyWidget extends Component<Props, State> {
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

    render() {
        const Rendercomponent = this.props.renderComponent;

        return <Rendercomponent text={this.state.text} values={this.state.values}
                                onClick={this.onClick} onChange={this.onChange}/>
    }
}

export const PureComponentFunctionalExample = () => (
    <div>
        <h2>Normal FC</h2>
        <MyWidget startText="foo" renderComponent={InnerRender}/>

        <hr/>
        <h2>Pure FC</h2>
        <MyWidget startText="baz" renderComponent={PureInnerRender}/>

        <hr/>
        <h2>Memo FC</h2>
        <MyWidget startText="zed" renderComponent={MemoInnerRender}/>
    </div>
);
