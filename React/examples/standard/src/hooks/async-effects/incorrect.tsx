import React, {FC, useEffect, useState} from "react";
import {delay, readData} from "./api";

export const AsyncInitialisationIncorrect: FC = () => {
    const [state, setState] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setState('Starting read...')
            await delay(2000);
            setState('Almost read...')
            await delay(2000);
            setState('Few more seconds...')
            const result = await readData();
            setState(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            Reading data....
            <pre>{state}</pre>
        </div>
    )

}
