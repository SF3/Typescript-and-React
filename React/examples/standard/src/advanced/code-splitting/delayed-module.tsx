import React, {FC} from "react";
import {dependencyMessage} from "./delayed-dependency";

interface Props {
    source?: string;
}

export const DelayedComponent: FC<Props> = (props) =>
    <div>
        <div>
            I was dynamically loaded by {props ? props.source : '"No Source specified!"'}.
        </div>
        <div>
            {dependencyMessage}
        </div>
    </div>;
