import React, {FC} from 'react';
import Calculator from "../calculator/Calculator";
import History from "../history/History";

export const CalculatorApp: FC = () => (
    <div className="container">
        <h1>Calculator App</h1>
        <Calculator/>
        <div className="mb-3"/>
        <History/>
    </div>
);
