import * as React from "react";
import {Component} from "react";
import {Task} from "./Task";

interface Props {
    taskIndex: number;
    task: Task;
    toggleDone: (_:number) => void;
    deleteTask: (_:number) => void;
}

export class TaskItem extends Component<Props> {
    public render() {
        return <tr key={this.props.taskIndex}>
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
        </tr>;
    }

    private toggleDone = () => this.props.toggleDone(this.props.taskIndex);

    private deleteTask = () => this.props.deleteTask(this.props.taskIndex);
}
