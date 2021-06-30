import * as React from "react";
import {FC, useState} from 'react';

interface Props {
    initialValue: number;
}

const Counter: FC<Props> = React.memo(({initialValue}) => {
    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = () => {
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    };

    return <div>
        <button onClick={incrementCounter}>Increment</button>
        <span className="ml-2 badge badge-info">{counter}</span>
    </div>;
});

export const BatchedStateHookExample = () => (
    <div>
        <Counter initialValue={0}/>
    </div>
);
