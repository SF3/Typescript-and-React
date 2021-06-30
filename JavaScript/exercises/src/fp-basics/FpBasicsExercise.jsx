import React, {useEffect, useState} from "react";
import _ from "lodash"

export const FpBasicsExercise = () => {
    const [output, setOutput] = useState("");

    useEffect(() => {
        const numbers = [];

        for (let x = 0; x < 100; x++) {
            numbers.push(Math.random() * 100);
        }

        const numbersOverFifty = [];
        for (let number of numbers) {
            if (number > 50) {
                numbersOverFifty.push(number);
            }
        }
        const formattedNumbers = [];
        for (let number of numbersOverFifty) {
            formattedNumbers.push(`${number.toFixed(2)}\n`)
        }

        let result = "\n";
        for (let number of formattedNumbers) {
            result += number;
        }

        setOutput(result);
    }, []);

    // --- Ignore ---
    return (
        <div>
            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};