import {add, historyReducer as target, clear} from "./Slice";

const noAction = {type: "NoActionType"};

describe("Calculation Log Reducer", () => {
    it("Creates empty store", () => {
        expect(target(undefined, noAction)).toEqual([]);
    });

    it("Returns unmodified state with unsupported action", () => {
        const DUMMY_INITIAL_STATE = ["Dummy Log"];

        expect(target(DUMMY_INITIAL_STATE, noAction)).toBe(DUMMY_INITIAL_STATE);
        expect(DUMMY_INITIAL_STATE).toEqual(["Dummy Log"]);
    });

    it("Adds entry to empty store", () => {
        let result = target([], add("abc"));

        expect(result).toEqual(["abc"]);
    });

    it("Adds entry to populated store", () => {
        let result = target(["abc", "def"], add("123"));

        expect(result).toEqual(["abc", "def", "123"]);
    });

    it("Clears populated store", () => {
        let result = target(["abc", "def"], clear());

        expect(result).toEqual([]);
    })
});
