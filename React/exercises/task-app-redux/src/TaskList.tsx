import * as React from "react";
import {Task} from "./Task";
import {TaskItem} from "./TaskItem";

interface IProps {
    items: Task[];
    filter: string;
    toggleDone: (task: Task) => void;
    deleteTask: (task: Task) => void;
}

export const TaskList = (props: IProps) => {
    const filter = props.filter.toLowerCase();
    let tasks = props.items;
    if (filter) {
        tasks = tasks.filter(x => x.text.toLowerCase().indexOf(filter) !== -1)
    }

    const taskItems = tasks.map((task, taskIndex) => (
        <TaskItem task={task}
                  taskIndex={taskIndex}
                  deleteTask={props.deleteTask}
                  toggleDone={props.toggleDone}
                  key={taskIndex}/>)
    );

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
            {taskItems}
            </tbody>
        </table>
    );
};
