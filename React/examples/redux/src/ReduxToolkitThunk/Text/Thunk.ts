import {createAsyncThunk} from "@reduxjs/toolkit";
import {delay} from "../../AsyncUtils";

export const prependAsync = createAsyncThunk('PREPEND', async (input: string, thunkApi) => {
    await delay();
    return input;
});
