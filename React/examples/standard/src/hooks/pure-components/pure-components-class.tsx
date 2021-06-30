import * as React from "react";
import {Set} from "immutable";
import {ChangeEvent, PureComponent} from 'react';
import {PureInput} from "./PureInput";
import {PureButton} from "./PureButton";
import {concatenateValues as concatenateValuesNoMemo, sectionStyle} from "./common";
import memoizeOne from "memoize-one";

interface Props {
    startText: string
}

interface State {
    text: string;
    values: Set<string>;
}

const concatenateValues = memoizeOne(concatenateValuesNoMemo);

export class MyWidgetClass extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: props.startText,
            values: Set<string>()
        }
    }

    onConcat = () => this.setState({values: this.state.values.add(this.state.text)});
    onClear = () => this.setState({values: Set<string>()});
    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({text: e.target.value});

    render() {
        console.log('Main Component Re-rendered');
        const valuesString = concatenateValues(this.state.values);

        return (
            <section style={sectionStyle}>
                <h4>Type in new text:</h4>
                <PureInput onChange={this.onChange} text={this.state.text}/>
                <div>
                    Concatenated: <mark>{valuesString}</mark>
                </div>
                <PureButton onClick={this.onConcat} name="Concat"/>
                <PureButton onClick={this.onClear} name="Clear"/>
            </section>
        );
    }
}
