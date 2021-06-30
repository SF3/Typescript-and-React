import {NumberAction} from "./Number/Types";
import {TextAction} from "./Text/Types";

export type RootAction =
    NumberAction |
    TextAction
