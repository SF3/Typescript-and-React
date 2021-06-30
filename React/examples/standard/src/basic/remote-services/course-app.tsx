import * as React from "react";
import {CourseService} from "./course-service";
import {CourseList} from "./course-list";
import {ViewCourse} from "./view-course";
import {EditCourse} from "./edit-course";
import {Component, FormEvent} from "react";
import {Course} from "./Course";
import {ButtonEventHandler} from "./Types";

const coursesCollection = new CourseService();

interface State {
    courses: Course[];
    selectedCourse: Course | null;
    modifiedCourse: Course | null;
}

export class CourseApp extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = this.initialState();
        this.loadCoursesFromServer();
    }

    initialState(): State {
        return {
            courses: [],
            selectedCourse: null,
            modifiedCourse: null
        };
    }

    deleteCourse = (e: ButtonEventHandler) => {
        coursesCollection.delete(e.currentTarget.value)
            .then(() => {
                this.setState({
                    selectedCourse: null,
                    modifiedCourse: null
                });
                this.loadCoursesFromServer()
            });
    };

    editCourse = async (e: ButtonEventHandler) => {
        const course = await coursesCollection.get(e.currentTarget.value);
        this.setState({
            selectedCourse: null,
            modifiedCourse: course
        });
    };

    viewCourse = (e: ButtonEventHandler) => {
        coursesCollection.get(e.currentTarget.value)
            .then((data) => {
                this.setState({
                    modifiedCourse: null,
                    selectedCourse: data
                });
            });
    };

    updateCourse = (e: FormEvent<HTMLFormElement>) => {
        coursesCollection.put(this.state.modifiedCourse!)
            .then(() => {
                this.loadCoursesFromServer();
                this.setState({modifiedCourse: null});
            });
        e.preventDefault();
    };

    loadCoursesFromServer(): void {
        coursesCollection.getAll()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <ViewCourse selectedCourse={this.state.selectedCourse}/>
                <EditCourse modifiedCourse={this.state.modifiedCourse}
                            updateCourse={this.updateCourse}/>
                <CourseList courses={this.state.courses}
                            viewCourse={this.viewCourse}
                            deleteCourse={this.deleteCourse}
                            editCourse={this.editCourse}/>
            </div>
        );
    }
}
