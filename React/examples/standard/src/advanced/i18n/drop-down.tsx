import React, {ChangeEvent, FC} from "react";

export interface DropDownOption {
    value: string | number;
    message: string;
}

interface DropDownProps {
    value: string | number;
    options: DropDownOption[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const DropDown: FC<DropDownProps> = ({value, options, onChange}) => (
    <select value={value} onChange={onChange}>
        {options.map(option =>
            <option key={option.value} value={option.value}>{option.message}</option>
        )}
    </select>
);
