import * as React from "react";
import {ChangeEvent, Component} from "react";

interface Props {
    startText: string;
}

interface State {
    text: string;
}

const sectionStyle = {
    border: 'thin solid black',
    width: '50%', padding: '1em'
};

class MyWidget extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: this.props.startText
        };
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        const date = new Date().toLocaleTimeString();

        return (
            <section style={sectionStyle}>
                <h4>Type to update me:</h4>
                <input type="text"
                       onChange={this.onChange}
                       value={this.state.text}/>
                <div><i>Rendered at {date}</i></div>
            </section>
        );
    }
}

export const RerenderingExample = () => (
    <div>
        <MyWidget startText="foo"/>
        <hr/>
        <MyWidget startText="wibble"/>
    </div>
);
