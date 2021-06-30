import * as React from "react";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {reducer, adjustmentChanged, valueIncremented, allIncremented} from "./Slice";
import ValuesTable from "./ValuesTable";
import AdjustmentControl from "../AdjustmentControl";
import {RepeatActionDispatcher} from "../RepeatActionDispatch";

const store = configureStore({
    reducer,
    middleware: [thunk]
});

export const PerfReduxToolkit = () => {
    return <Provider store={store}>
        <div>
            <div>
                <RepeatActionDispatcher store={store} actionFn={() => valueIncremented(0)}
                                        repeats={100} title="Launch Increments"/>
                <RepeatActionDispatcher store={store} actionFn={index => adjustmentChanged(index)}
                                        repeats={100} title="Launch Adjustments"/>
                <RepeatActionDispatcher store={store} actionFn={index => (allIncremented())}
                                        repeats={50} title="Launch All Incremented"/>
            </div>
            <AdjustmentControl/>
            <ValuesTable/>
        </div>
    </Provider>;
};
