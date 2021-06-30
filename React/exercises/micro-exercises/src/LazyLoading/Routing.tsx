import React, {FC} from "react";
import {Link,  RouteComponentProps} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Authenticated} from "./Authenticated";

const UnknownURL: FC = () => <h1>404 Error</h1>;

const Nested: FC<RouteComponentProps> = (props) => (
    <div>
        <h1>I am a nested route</h1>
    </div>
);

export const Greeting: FC<RouteComponentProps<{ name: string }>> = (props) => (

    <div>
        <h1>Hello {props.match.params.name}</h1>
        This is an example of receiving parameters in the route
    </div>
);

export const LazyLoadingExercise: FC<RouteComponentProps> = props => (
    <div className="row">
        <aside className="col-4 bg-light">
            <ul>
                <li><Link to={`${props.match.path}/nested-component`}>Nested Route</Link></li>
                <li><Link to={`${props.match.path}/greeting/John`}>Parameter Example 1</Link></li>
                <li><Link to={`${props.match.path}/greeting/Jane`}>Parameter Example 2</Link></li>
                <li><Link to={`${props.match.path}/authenticaed`}>Authenticated</Link></li>
            </ul>
        </aside>
        <div className="col">
            <Switch>
                <Route path={`${props.match.path}/`} exact={true} render={() => <></>}/>
                <Route path={`${props.match.path}/nested-component`} component={Nested}/>
                <Route path={`${props.match.path}/greeting/:name`} component={Greeting}/>
                <Route path={`${props.match.path}/authenticaed`} component={Authenticated}/>
                <Route component={UnknownURL}/>
            </Switch>
        </div>
    </div>
);
