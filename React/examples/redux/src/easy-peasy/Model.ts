import {NumberModel, numberModel} from "./Number/Model";
import {textModel, TextModel} from "./Text/Model";

export interface StoreModel {
    text: TextModel;
    number: NumberModel;
}

export const storeModel = {
    text: textModel,
    number: numberModel
};
