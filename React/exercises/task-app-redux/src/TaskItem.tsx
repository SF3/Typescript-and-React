import * as React from "react";
import {Task} from "./Task";

interface IProps {
    taskIndex: number;
    task: Task;
    toggleDone: (task: Task) => void;
    deleteTask: (task: Task) => void;
}

export class TaskItem extends React.Component<IProps> {
    public render() {
        return (
            <tr key={this.props.taskIndex}>
                <td>{this.props.taskIndex + 1}</td>
                <td>{this.props.task.text}</td>
                <td>
                <span className={this.props.task.done
                    ? "fa fa-check-square-o pointer"
                    : "fa fa-square-o pointer"}
                      aria-hidden="true"
                      onClick={this.toggleDone}/>
                </td>
                <td>
                <span className="fa fa-trash pointer"
                      aria-hidden="true"
                      onClick={this.deleteTask}/>
                </td>
            </tr>
        );
    }

    public toggleDone = () => {
        this.props.toggleDone(this.props.task)
    };

    public deleteTask = () => {
        this.props.deleteTask(this.props.task)
    };
}
