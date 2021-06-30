import React, {useEffect, useState} from "react";
import {delay, readData} from "./api";

export const AsyncInitialisationCrash = () => {
    const [state, setState] = useState('');

    // Note, TypeScript protects use from this kind of mistake.
    // It is not possible to pass useEffect a promise returning callback.

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setState('Starting read...')
        await delay(2000);
        setState('Almost read...')
        await delay(2000);
        setState('Few more seconds...')
        const result = await readData();
        setState(result);
    }, []);

    return (
        <div>
            Reading data....
            <pre>{state}</pre>
        </div>
    )
}
