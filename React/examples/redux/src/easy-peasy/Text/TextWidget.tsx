import {FC} from "react";
import * as React from 'react';
import {useStoreActions, useStoreState} from "../Hooks";

export const TextWidget: FC = () => {
    const message = useStoreState(state => state.text.message);
    const isLoading = useStoreState(state => state.text.isLoading);

    const onPrepend = useStoreActions(actions => actions.text.onPrepend);
    const append = useStoreActions(actions => actions.text.append);

    return <div>
        <div>
            <button disabled={isLoading} className="btn btn-primary" onClick={() => onPrepend("AAA")}>Prepend</button>
            <button disabled={isLoading} className="btn btn-primary" onClick={() => append("ZZZ")}>Append</button>
        </div>
        <div className="lead">
            {message}
            {isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
    </div>;
};
