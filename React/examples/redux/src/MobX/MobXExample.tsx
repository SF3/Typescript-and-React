import {NumberWidget} from "./Number/NumberWidget";
import * as React from "react";
import {numberModel} from "./Number/Model";
import {TextWidget} from "./Text/TextWidget";
import {textModel} from "./Text/Model";

export const MobXExample = () =>
    <div>
        <NumberWidget model={numberModel}/>
        <hr/>
        <TextWidget model={textModel}/>
    </div>;
