import {ChangeEventHandler, FunctionComponent, default as React} from "react";

interface Props {
    onChange: ChangeEventHandler<HTMLInputElement>;
    text: string;
}

export const PureInput: FunctionComponent<Props> = React.memo(({onChange, text}) => {
    console.log(`Input rerendered`);
    return (
        <div>
            <input type="text"
                   onChange={onChange}
                   value={text}/>
        </div>
    );
});
