import {createAction} from "@reduxjs/toolkit";

export const prependAction = createAction<string>('PREPEND');
export const appendAction = createAction<string>('APPEND');
