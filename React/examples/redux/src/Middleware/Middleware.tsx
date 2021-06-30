import * as React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore, Middleware} from "redux";
import {State, reducers} from "../Typesafe/Reducers";
import NumberWidget from "../Typesafe/Number/NumberWidget";
import TextWidget from "../Typesafe/Text/TextWidget";

const generalLogger: Middleware = store => nextMiddleware => action => {
    console.log("Entering General Logger");

    const oldValue = JSON.stringify(store.getState());
    nextMiddleware(action);
    const newValue = JSON.stringify(store.getState());

    console.log(`State went from ${oldValue} to ${newValue}`);
};

const numberLogger: Middleware<{}, State> = store => nextMiddleware => action => {
    console.log("Entering Number Logger");

    const oldValue = store.getState().numberFeature.result;
    nextMiddleware(action);
    const newValue = store.getState().numberFeature.result;

    console.log(`Number State went from ${oldValue} to ${newValue}`);
};

const appStore = createStore(
    reducers,
    applyMiddleware(generalLogger, numberLogger)
);

export const MiddlewareDemo = () =>
    <Provider store={appStore}>
        <div>
            <NumberWidget/>
            <hr/>
            <TextWidget/>
        </div>
    </Provider>;
