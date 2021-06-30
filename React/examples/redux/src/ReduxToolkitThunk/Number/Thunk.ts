import {createAsyncThunk} from "@reduxjs/toolkit";
import {delay} from "../../AsyncUtils";

export const decrementAsync = createAsyncThunk('DECREMENT', async (value: number, thunkApi) => {
    await delay();
    return value;
});
