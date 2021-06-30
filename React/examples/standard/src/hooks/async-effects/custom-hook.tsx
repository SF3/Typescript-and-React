import React, {FC, useEffect, useState} from "react";
import {delay, readData} from "./api";

function useCancellable(func: (isCancelled: () => boolean) => Promise<void>) {
    useEffect(() => {
        let cancel = false;

        func(() => cancel);

        return () => { cancel = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}


export const AsyncInitialisationCustomHook: FC = () => {
    const [state, setState] = useState('');

    useCancellable(async isCanncelled => {
        setState('Starting read...')
        await delay(2000);

        if (isCanncelled()) return;
        setState('Almost read...')
        await delay(2000);

        if (isCanncelled()) return;
        setState('Few more seconds...')
        const result = await readData();

        if (isCanncelled()) return;
        setState(result);
    });

    return (
        <div>
            Reading data....
            <pre>{state}</pre>
        </div>
    )
}
