import * as numberActions from "./Actions";
import {ActionType} from "typesafe-actions";

export type NumberAction = ActionType<typeof numberActions>;

export const NumberActions = numberActions;
