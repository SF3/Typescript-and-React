import * as React from "react";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {adjustmentChanged, reducer, valueIncremented} from "./Ducks";
import ValuesTable from "./ValuesTable";
import AdjustmentControl from "../AdjustmentControl";
import {RepeatActionDispatcher} from "../RepeatActionDispatch";

const store = configureStore({
    reducer,
    middleware: [thunk]
});

export const PerfBasicRedux = () => {
    return <Provider store={store}>
        <div>
            <div>
                <RepeatActionDispatcher store={store as any} actionFn={() => valueIncremented(0)}
                                        repeats={100} title="Launch Increments"/>
                <RepeatActionDispatcher store={store as any} actionFn={index => adjustmentChanged(index)}
                                        repeats={100} title="Launch Adjustments"/>
            </div>
            <AdjustmentControl/>
            <ValuesTable/>
        </div>
    </Provider>;
};
