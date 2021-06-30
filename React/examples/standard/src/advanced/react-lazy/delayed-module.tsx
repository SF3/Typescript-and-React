import React, {FC} from "react";

interface Props {
    source: string;
}

const DelayedComponent: FC<Props> = (props) => (
    <div>
        I was dynamically loaded by {props.source}
    </div>
);

export default DelayedComponent;
