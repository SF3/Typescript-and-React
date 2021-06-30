import * as React from "react";
import {useState, useEffect, FC} from 'react'

interface Props {
    name: string;
}

const Ticker: FC<Props> = ({name}) => {
    console.log("Rendering");
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
        console.log('Initialising Interval');
        const interval = setInterval(
            () => setSecondsElapsed(prev => prev + 1),
            1000);

        return () => {
            console.log('Clearing Interval');
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Page open {secondsElapsed} seconds.</p>
        </div>
    );
};

export const UseEffectsCleanupExample: FC = () =>
    <Ticker name="Fred"/>;
