import {NumberWidget} from "./Number/NumberWidget";
import * as React from "react";
import {createStore, StoreProvider} from "easy-peasy";
import {storeModel} from "./Model";
import {TextWidget} from "./Text/TextWidget";

const store = createStore(storeModel);

export const EasyPeasyExample = () =>
    <StoreProvider store={store}>
        <div>
            <NumberWidget/>
            <hr/>
            <TextWidget/>
        </div>
    </StoreProvider>;
