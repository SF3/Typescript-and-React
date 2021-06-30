import * as React from "react";
import {ChangeEvent, Component, FormEvent} from "react";
import {Task} from "./Task";
import {TaskList} from "./TaskList";

interface State {
    items: Task[];
    newTask: string;
}

export class TaskApp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = this.initialState();
    }

    public render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskList items={this.state.items}
                          deleteTask={this.deleteTask}
                          toggleDone={this.toggleDone}/>
                <div className="row justify-content-end">
                    <form className="form-inline" onSubmit={this.addTask}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   id="newTask" placeholder="New task"
                                   onChange={this.onChange}
                                   value={this.state.newTask}/>
                        </div>
                        <button type="submit" className="btn btn-default">Add Task</button>
                    </form>
                </div>
            </div>
        );
    }

    private initialState(): State {
        return {
            items: [
                new Task("Tread the thrones of the Earth under my feet", false),
                new Task("Win ten straight victories in Mortal Kombat", true),
                new Task("Terminate the command of Colonel Kurtz", true),
            ],
            newTask: ''
        }
    }

    private onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({newTask: e.target.value});
    };

    private toggleDone = (taskIndex: number) => {
        console.log("Toggle done called with " + taskIndex);
        const items = [...this.state.items];
        items[taskIndex].done = !items[taskIndex].done;
        this.setState({items});
    };

    private deleteTask = (taskIndex: number) => {
        this.setState(state => {
            state.items.splice(taskIndex, 1);
            return {items: state.items};
        });
    };

    private addTask = (e: FormEvent<HTMLFormElement> ) => {
        this.setState({
            items: this.state.items.concat([{text: this.state.newTask, done: false}]),
            newTask: ''
        });
        e.preventDefault();
    };
}
