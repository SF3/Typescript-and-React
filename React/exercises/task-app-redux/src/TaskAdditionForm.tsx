import * as React from "react";
import {ChangeEvent, Component, FormEvent} from "react";

interface IProps {
    addTask: (task: string) => void;
}

interface IState {
    newTask: string;
}

export class TaskAdditionForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {newTask: ''};
    }

    public render() {
        return <form className="form-inline pull-right" onSubmit={this.addTask}>
            <div className="form-group">
                <input type="text" className="form-control"
                       id="newTask" placeholder="New task"
                       onChange={this.onChange}
                       value={this.state.newTask}/>
            </div>
            <button type="submit" className="btn btn-default">Add Task</button>
        </form>
    }

    private onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({newTask: e.target.value});
    };

    private addTask = (e: FormEvent<HTMLFormElement>) => {
        this.props.addTask(this.state.newTask);
        this.setState({newTask: ''});
        e.preventDefault();
    }
}
