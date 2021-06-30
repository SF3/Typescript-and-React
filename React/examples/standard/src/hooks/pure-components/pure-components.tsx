import * as React from "react";
import {ChangeEvent, FunctionComponent, useCallback, useMemo, useState} from "react";
import {Set} from "immutable";
import {PureInput} from "./PureInput";
import {PureButton} from "./PureButton";
import {MyWidgetClass} from "./pure-components-class";
import {concatenateValues, sectionStyle} from "./common";

interface Props {
    startText: string
}

const MyWidget: FunctionComponent<Props> = React.memo(({startText}) => {
    console.log('Main Component Re-rendered');
    const [text, setText] = useState(startText);
    const [values, setValues] = useState(Set<string>());

    const onConcat = useCallback(() => setValues(values.add(text)), [values, text]);
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.target.value), []);
    const onClear = useCallback(() => setValues(Set<string>()), []);

    const valuesString = useMemo(() => concatenateValues(values), [values]);

    return (
        <section style={sectionStyle}>
            <h4>Type in new text:</h4>
            <PureInput onChange={onChange} text={text}/>
            <div>
                Concatenated: <mark>{valuesString}</mark>
            </div>
            <PureButton onClick={onConcat} name="Concat"/>
            <PureButton onClick={onClear} name="Clear"/>
        </section>
    );
});

export const PureComponentHooksExample: FunctionComponent = () => {
    console.log("Outer component rendered");
    return (
        <div>
            <div>
                <p><strong>Use the console to see rerenders</strong></p>
                <p>
                    useState will only cause a re-render if the data is different
                </p>
                <p>
                    We can use useCallback to avoid recreating functions (which
                    would trigger re-renders.
                </p>
                <p>
                    useMemo will avoid doing unnecessary computations.
                    would trigger re-renders.
                </p>
                <MyWidget startText="foo"/>
            </div>
            <div className="mt-2">
                <p><strong>Below is the same in class form</strong></p>
                <MyWidgetClass startText="foo2"/>
            </div>
        </div>);
};
