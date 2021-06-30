import {FC} from "react";
import * as React from 'react';
import {observer} from "mobx-react";
import {NumberModel} from "./Model";

interface Props {
    model: NumberModel;
}

export const NumberWidget: FC<Props> = observer(({model}) => {
    console.log("Rendering NumberWidget");
    return <div>
        <div>
            <button disabled={model.isLoading} className="btn btn-primary" onClick={model.increment}>Increment</button>
            <button disabled={model.isLoading} className="btn btn-primary" onClick={model.onDecrement}>Decrement</button>
        </div>
        <div className="lead">
            {model.result}
            {model.isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
    </div>;
});
