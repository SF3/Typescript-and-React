import * as React from "react";
import {TaskItem} from "./task-item";
import {Task} from "./Task";
import {FC} from "react";

interface Props {
    items: Task[];
    toggleDone(taskIndex: number): void;
    deleteTask(taskIndex: number): void;
}

export const TaskList: FC<Props> = (props) => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Task</th>
                <th>Done</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((task, taskIndex) =>
                <TaskItem task={task}
                          taskIndex={taskIndex}
                          deleteTask={props.deleteTask}
                          toggleDone={props.toggleDone}
                          key={taskIndex}/>
            )}
            </tbody>
        </table>
    );
};
