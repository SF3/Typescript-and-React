import {PayloadAction, SerializedError} from "@reduxjs/toolkit";

export type PayloadErrorAction<T> = PayloadAction<T, string, {}, SerializedError>;
