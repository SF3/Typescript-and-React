import * as React from "react";
import {useState, useEffect, Dispatch, SetStateAction} from 'react'

function createTicker(setSecondsElapsed: Dispatch<SetStateAction<number>>): () => void {
    const interval = setInterval(
        () => setSecondsElapsed(prev => prev + 1),
        5000);

    return () => {
        console.log('Clearing Interval');
        clearInterval(interval);
    };
}

export const UseEffectAllVariantsExample = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => setCounter(counter + 5);

    useEffect(() => {
        console.log('Executed every render');
    });

    useEffect(() => {
        console.log('Executed only once per component');
        return createTicker(setSecondsElapsed);
    }, []);

    useEffect(() => {
        console.log('Executed when the dependency "counter" changes');
    }, [counter]);

    return (
        <div>
            <p>Page open {secondsElapsed} seconds.</p>
            <div>
                <button onClick={incrementCounter}>Increment</button>
                <span className="ml-2 badge badge-info">{counter}</span>
            </div>
        </div>
    );
};
