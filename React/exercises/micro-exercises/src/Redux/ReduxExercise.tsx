import React from 'react'
import {compose, createStore} from "redux";
import {reducer} from "./Reducer";
import {Provider} from "react-redux";
import NumberSequences from './NumberSequences'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const ReduxExercise = () => (
    <Provider store={store}>
        <NumberSequences/>
    </Provider>
);
