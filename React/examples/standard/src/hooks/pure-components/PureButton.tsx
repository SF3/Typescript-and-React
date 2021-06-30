import {FunctionComponent, default as React, MouseEventHandler} from "react";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
    name: string;
}

export const PureButton: FunctionComponent<Props> = React.memo(({onClick, name}) => {
    console.log(`Button ${name} rerendered`);
    return (
        <>
            <button onClick={onClick}>Push To {name}</button>
        </>
    );
});
