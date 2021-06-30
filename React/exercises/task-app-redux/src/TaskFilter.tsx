import * as React from "react";
import {ChangeEventHandler} from 'react';

interface IProps {
    filter: string;
    updateFilter: ChangeEventHandler<HTMLInputElement>;
    clearFilter: () => void;
}

export const TaskFilter = ({filter, updateFilter, clearFilter}: IProps) => {
    return <div>
        <input type="text" className="col-sm-6" id="filter" placeholder="Filter"
               onChange={updateFilter} value={filter}/>
        <span className="col-sm-1"/>
        <button className="btn ml col-md-2" onClick={clearFilter}>Clear</button>
    </div>;
};
