import {MouseEvent} from "react";


export type ButtonEventHandler = MouseEvent<HTMLButtonElement & { value: string }>;
