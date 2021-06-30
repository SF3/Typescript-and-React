import {FC} from "react";
import * as React from 'react';
import {useStoreActions, useStoreState} from "../Hooks";

export const NumberWidget: FC = () => {
    const result = useStoreState(state => state.number.result);
    const isLoading = useStoreState(state => state.number.isLoading);

    const increment = useStoreActions(actions => actions.number.increment);
    const onDecrement = useStoreActions(actions => actions.number.onDecrement);

    return <div>
        <div>
            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment(4)}>Increment</button>
            <button disabled={isLoading} className="btn btn-primary" onClick={() => onDecrement(3)}>Decrement</button>
        </div>
        <div className="lead">
            {result}
            {isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
    </div>;
};
