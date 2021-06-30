import * as React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./Reducers";
import NumberWidget from "./Number/NumberWidget";
import TextWidget from "./Text/TextWidget";

const store = createStore(reducers);

export const Typesafe = () =>
    <Provider store={store}>
        <div>
            <NumberWidget/>
            <hr/>
            <TextWidget/>
        </div>
    </Provider>;
