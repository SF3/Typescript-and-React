import React, {FC} from "react";
import {ErrorMessage, Field} from "formik";

export interface InputProps {
    label: string;
    name: string;
}

function Input<ExtraProps = {}>(type: string): FC<InputProps & ExtraProps> {
    return ({label, name, children, ...extraProps}) =>
        <div className="form-group">
            <label>{label}
                <Field className="form-control" type={type} name={name} {...extraProps}/>
            </label>
            <ErrorMessage component="span" className="alert alert-danger ml-2" name={name}/>
        </div>;
}

export const TextInput = Input('text');
export const NumberInput = Input<{step?: string}>('number');
export const DateInput = Input<{max?: string}>('date');
