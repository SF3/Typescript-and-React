import {observable} from "mobx";

export class NumberModel {
    @observable result = 100;
    @observable isLoading = false;

    increment = () => {
        this.result += 4;
    };

    onDecrement = () => {
        return new Promise(resolve => {
            this.isLoading = true;
            setTimeout(() => {
                this.result -= 3;
                this.isLoading = false;
                resolve();
            }, 2000);
        });
    };
}

export const numberModel = new NumberModel();
