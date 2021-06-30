import * as textActions from "./Actions";
import {ActionType} from "typesafe-actions";

export type TextAction = ActionType<typeof textActions>;
export const TextActions = textActions;
