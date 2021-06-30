import {FC} from "react";
import * as React from 'react';
import {observer} from "mobx-react";
import {TextModel} from "./Model";

interface Props {
    model: TextModel;
}

export const TextWidget: FC<Props> = observer(({model}) => {
    console.log("Rendering NumberWidget");
    return <div>
        <div>
            <button disabled={model.isLoading} className="btn btn-primary" onClick={model.onPrepend}>Prepend</button>
            <button disabled={model.isLoading} className="btn btn-primary" onClick={model.append}>Append</button>
        </div>
        <div className="lead">
            {model.message}
            {model.isLoading ? <span className="ml-2 fa fa-circle-o-notch fa-spin"/> : null}
        </div>
        <div>
            Length: {model.length}
        </div>
    </div>;
});
