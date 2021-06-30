import {createAction} from "@reduxjs/toolkit";

export const incrementAction = createAction<number>('INC');
export const decrementAction = createAction<number>('DEC');
