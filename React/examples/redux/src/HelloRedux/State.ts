import {NumberState} from "./Number/NumberState";
import {TextState} from "./Text/TextState";

export interface State {
    readonly numberFeature: NumberState
    readonly textFeature: TextState
}
