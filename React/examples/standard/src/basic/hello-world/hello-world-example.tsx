import * as React from "react";
import {Component} from "react";

const Hello = () => <span>Hello</span>;

class World extends Component {
    render() {
        return <span>World</span>;
    }
}

export const HelloWorldExample = () => (
    <h1>
        <Hello/>
        &nbsp;
        <World/>
    </h1>
);
