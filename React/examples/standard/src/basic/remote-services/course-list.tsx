import * as React from "react";
import {CourseRow} from "./course-row";
import {Course} from "./Course";
import {ButtonEventHandler} from "./Types";
import {FC} from "react";

interface Props {
    viewCourse(_: ButtonEventHandler): void;
    editCourse(_: ButtonEventHandler): void;
    deleteCourse(_: ButtonEventHandler): void;
    courses: Course[];
}

export const CourseList: FC<Props> = (props) => {
    const rows = props.courses.map((course, courseIndex) =>
        <CourseRow key={courseIndex} course={course}
                   viewCourse={props.viewCourse}
                   deleteCourse={props.deleteCourse}
                   editCourse={props.editCourse}/>
    );

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th/>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
};
