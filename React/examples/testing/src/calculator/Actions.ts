import {add} from "../history/Slice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CalculationFunction} from "../services/CalculationProcessor";

interface Calculation {
    input1: number;
    input2: number;
    operation: CalculationFunction;
    operator: string;
}

export const calculate = createAsyncThunk('CALCULATE', async ({input1, input2, operation, operator}: Calculation, thunkApi) => {
    const result = await operation(input1, input2);
    let operationString = `${input1} ${operator} ${input2} = ${result}`;
    thunkApi.dispatch(add(operationString));
    return result;
});
