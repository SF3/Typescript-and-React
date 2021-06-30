import * as React from "react";
import {ChangeEvent, FC, memo} from "react";
import {Set} from "immutable";
import {pure} from "recompose";

const sectionStyle = {
    border: 'thin solid black',
    width: '50%', padding: '1em'
};

function concatenateValues(values: Set<string>): string {
    return values.reduce((a, b) => a + "-" + b);
}

export interface InnerProps {
    onClick(): void;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
    text: string;
    values: Set<string>;
}

export const InnerRender: FC<InnerProps> = (props) => {
    const date = new Date().toLocaleTimeString();
    return (
        <section style={sectionStyle}>
            <h4>Type in new text:</h4>
            <div>
                <input type="text"
                       onChange={props.onChange}
                       value={props.text}/>
                <button onClick={props.onClick}>Push To Update</button>
            </div>
            <div>
                Current state:
                <mark>{concatenateValues(props.values)}</mark>
            </div>
            <div><i>Rendered at {date}</i></div>
        </section>
    );
};

export const PureInnerRender = pure(InnerRender);

export const MemoInnerRender = memo(InnerRender);
