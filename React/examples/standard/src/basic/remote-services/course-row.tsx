import * as React from "react";
import {Course} from "./Course";
import {ButtonEventHandler} from "./Types";
import {FC} from "react";

interface ButtonCellProps {
    action(_: ButtonEventHandler): void;
    buttonStyle: string;
    id: string;
    text: string
}

const ButtonCell: FC<ButtonCellProps> = (props) => (
    <td>
        <button type="button" className={"btn btn-" + props.buttonStyle}
                aria-label="Center Align"
                onClick={props.action} value={props.id}>
            {props.text}
        </button>
    </td>
);


interface Props {
    course: Course;
    viewCourse(_: ButtonEventHandler): void;
    editCourse(_: ButtonEventHandler): void;
    deleteCourse(_: ButtonEventHandler): void;
}

export const CourseRow: FC<Props> = (props) => {
    const course = props.course;

    return (
        <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <ButtonCell buttonStyle="info" action={props.viewCourse} id={course.id} text="View"/>
            <ButtonCell buttonStyle="warning" action={props.editCourse} id={course.id} text="Edit"/>
            <ButtonCell buttonStyle="danger" action={props.deleteCourse} id={course.id} text="Delete"/>
        </tr>
    );
};
