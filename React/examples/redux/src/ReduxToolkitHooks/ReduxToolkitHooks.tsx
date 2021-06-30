import * as React from "react";
import {Provider} from "react-redux";
import {reducers} from "./Reducers";
import NumberWidget from "./Number/NumberWidget";
import TextWidget from "./Text/TextWidget";
import {configureStore} from "@reduxjs/toolkit";
import {FC} from "react";

const store = configureStore({
    reducer: reducers
});

export const ReduxToolkitHooks: FC = () =>
    <Provider store={store}>
        <div>
            <NumberWidget/>
            <hr/>
            <TextWidget/>
        </div>
    </Provider>;
