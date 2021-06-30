import * as React from "react";
import {ChangeEvent, Component} from "react";
import {Task} from "./Task";
import {TaskAdditionForm} from "./TaskAdditionForm";
import {TaskFilter} from "./TaskFilter";
import {TaskList} from "./TaskList";

interface IState {
    items: Task[];
    filter: string
}

export class TaskApp extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = this.initialState();
    }

    public render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskFilter filter={this.state.filter}
                            updateFilter={this.updateFilter}
                            clearFilter={this.clearFilter}/>
                <TaskList items={this.state.items}
                          deleteTask={this.deleteTask}
                          toggleDone={this.toggleDone}
                          filter={this.state.filter}/>
                <TaskAdditionForm addTask={this.addTask}/>
            </div>
        );
    }

    public initialState(): IState {
        return {
            filter: '',
            items: [
                new Task("Tread the thrones of the Earth under my feet", false),
                new Task("Win ten straight victories in Mortal Kombat", true),
                new Task("Terminate the command of Colonel Kurtz", true)
            ]
        }
    }

    public updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({filter: e.target.value});
    };

    public clearFilter = () => {
        this.setState({filter: ''});
    };

    public toggleDone = (task: Task) => {
        task.done = !task.done;
        this.forceUpdate(); // Forces a re-render of this element.
                            // ** Generally bad practice - in for demonstration purposes
    };

    public deleteTask = (task: Task) => {
        this.setState(state => {
            return {items: state.items.filter(x => x !== task)};
        });
    };

    public addTask = (newTask: string) => {
        this.setState({
            items: [
                ...this.state.items,
                new Task(newTask, false)
            ]
        });
    }
}
