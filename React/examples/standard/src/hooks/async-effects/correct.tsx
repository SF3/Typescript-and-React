import React, {FC, useEffect, useState} from "react";
import {delay, readData} from "./api";

export const AsyncInitialisationCorrect: FC = () => {
    const [state, setState] = useState('');

    useEffect(() => {
        let cancel = false;

        const fetchData = async () => {
            setState('Starting read...')
            await delay(2000);

            if (cancel) return;
            setState('Almost read...')
            await delay(2000);

            if (cancel) return;
            setState('Few more seconds...')
            const result = await readData();

            if (cancel) return;
            setState(result);
        };

        fetchData();
        return () => { cancel = true; };
    }, []);

    return (
        <div>
            Reading data....
            <pre>{state}</pre>
        </div>
    );
}
