import * as React from "react";
import {FC} from "react";
import {AnyAction, Store} from "redux";

interface Props {
    store: Store;
    actionFn: (index: number) => AnyAction;
    repeats: number;
    title: string;
}

export const RepeatActionDispatcher: FC<Props> = ({store, actionFn, repeats, title}) => {
    const launch = () => {
        let count = 0;

        function dispatch() {
            setTimeout(() => {
                store.dispatch(actionFn(count));
                count++;
                if (count < repeats) {
                    dispatch();
                }
            }, 0)
        }

        dispatch();
    };

    return <button onClick={launch}>{title}</button>
};

