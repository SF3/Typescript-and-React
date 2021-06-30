import {computed, observable} from "mobx";

export class TextModel {
    @observable message = "";
    @observable isLoading = false;

    @computed get length() {
        console.log("Recomputing length");
        return this.message.length;
    }

    append = () => {
        this.message += "ZZZ";
    };

    onPrepend = () =>
        new Promise(resolve => {
            this.isLoading = true;
            setTimeout(() => {
                this.message = "AAA" + this.message;
                this.isLoading = false;
                resolve();
            }, 2000);
        });
}

export const textModel = new TextModel();
