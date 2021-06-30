import * as React from "react";
import {Component, FormEvent} from "react";
import {Course} from "./Course";

interface Props {
    modifiedCourse: Course | null;
    updateCourse(_: FormEvent<HTMLFormElement>): void;
}

interface HTMLUpdateEvent<T> {
    readonly target: { value: T };
}

export class EditCourse extends Component<Props> {
    renderForm(course: Course | null) {
        return !course
            ? null
            : <div>
                <h2>Update course</h2>
                <form onSubmit={this.props.updateCourse}>
                    <div className="form-group">
                        <label htmlFor="courseId">Course ID</label>
                        <input id="courseId" className="form-control" type="text" size={10}
                               value={course.id || ''}
                               readOnly={true}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseTitle">Course Title:</label>
                        <input id="courseTitle" className="form-control" type="text"
                               value={course.title || ''}
                               onChange={this.updateTitle}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="courseType">Course Type:</label>
                        <select id="courseType" className="form-control"
                                value={course.difficulty || ''}
                                onChange={this.updateDifficulty}>
                            <option value="BEGINNER">Beginner</option>
                            <option value="INTERMEDIATE">Intermediate</option>
                            <option value="ADVANCED">Advanced</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="duration">Length of Course:</label>
                        <input id="duration" className="form-control" type="number" min="1" max="5"
                               value={course.duration || ''}
                               onChange={this.updateDuration}/>
                    </div>

                    <input type="submit" value="Update Course"/>
                </form>
            </div>;
    }

    updateTitle = this.updateSelectedCourseState.bind(this, "title");
    updateDuration = this.updateSelectedCourseState.bind(this, "duration");
    updateDifficulty = this.updateSelectedCourseState.bind(this, "difficulty");

    updateSelectedCourseState(key: keyof Course, event: HTMLUpdateEvent<any>) {
        const updatedCourseState = this.props.modifiedCourse!;
        (updatedCourseState[key] as any) = event.target.value;
        this.setState({modifiedCourse: updatedCourseState});
    }

    render() {
        return (
            <div>{this.renderForm(this.props.modifiedCourse)}</div>
        );
    }
}
