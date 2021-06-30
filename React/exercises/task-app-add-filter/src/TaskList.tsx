import * as React from "react";
import {Task} from "./Task";
import {TaskItem} from "./TaskItem";

interface Props {
    items: Task[];
    toggleDone(taskIndex: number): void;
    deleteTask(taskIndex: number): void;
}

export const TaskList = (props: Props) => {
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
