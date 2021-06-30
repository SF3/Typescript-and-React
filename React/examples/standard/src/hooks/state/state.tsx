import * as React from "react";
import {FC, useState} from 'react';

interface Props {
    initialValue: number
}

const Counter: FC<Props> = React.memo(({initialValue}) => {
    const [counter, setCounter] = useState(initialValue);
    const incrementCounter = () => setCounter(counter + 1);

    return <div>
        <button onClick={incrementCounter}>Increment</button>
        <span className="ml-2 badge badge-info">{counter}</span>
    </div>;
});

export const StateHookExample: FC = () => (
    <div>
        <Counter initialValue={0}/>
        <hr/>
        <Counter initialValue={100}/>
        <hr/>
        <Counter initialValue={1000}/>
    </div>
);
