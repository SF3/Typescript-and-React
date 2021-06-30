import * as React from "react";
import {Component} from "react";
import {Course} from "./Course";

interface Props {
    selectedCourse: Course | null;
}

export class ViewCourse extends Component<Props> {
    renderTable(course: Course | null) {
        return !course
            ? null
            : <table className="table table-condensed table-striped">
                <tbody>
                <tr>
                    <td><strong>ID</strong></td>
                    <td>{course.id}</td>
                </tr>
                <tr>
                    <td><strong>Title</strong></td>
                    <td>{course.title}</td>
                </tr>
                <tr>
                    <td><strong>Difficulty</strong></td>
                    <td>{course.difficulty}</td>
                </tr>
                <tr>
                    <td><strong>Duration</strong></td>
                    <td>{course.duration}</td>
                </tr>
                </tbody>
            </table>;
    }

    render() {
        const selectedCourse = this.props.selectedCourse;
        return (<div>{this.renderTable(selectedCourse)}</div>);
    }
}
