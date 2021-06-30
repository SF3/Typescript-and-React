import React, {FC, memo} from "react";

interface Props {
    index: number;
    value: number;
    increment(index: number): void;
    decrement(index: number): void;
}

export const ValuesTableRow: FC<Props> = memo(({index, value, increment, decrement}) =>
    <tr>
        <td>{value}</td>
        <td><button className="btn btn-primary"
                    onClick={() => increment(index)} >Increment</button></td>
        <td><button className="btn btn-primary"
                    onClick={() => decrement(index)} >Decrement</button></td>
    </tr>
);
