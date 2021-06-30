import * as React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./Reducers";
import NumberWidget from "./Number/NumberWidget";
import TextWidget from "./Text/TextWidget";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export const Thunk = () =>
    <Provider store={store}>
        <div>
            <NumberWidget/>
            <hr/>
            <TextWidget/>
        </div>
    </Provider>;
