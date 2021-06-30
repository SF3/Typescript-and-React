import React, {FC} from "react";
import {clear} from "./Slice";
import {connect} from "react-redux";
import {RootState} from "../State";

interface Props {
    log: string[];
    clearLog: () => void;
}

export const History: FC<Props> = ({log, clearLog}) => (
    <div className="well border bg-light p-3">
        <div>
            <h1>History</h1>
            <button className="btn btn-primary"
                    data-testid="clear-button" onClick={clearLog}>Clear
            </button>
        </div>

        <ul id="historyList">
            {log.map((entry, index) =>
                <li key={index}>{entry}</li>
            )}
        </ul>
    </div>
);

const mapState = ({log}: RootState) => ({
    log
});

const mapDispatch = ({
    clearLog: () => clear()
});

export default connect(mapState, mapDispatch)(History);
