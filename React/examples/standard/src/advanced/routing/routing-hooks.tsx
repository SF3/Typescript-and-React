import React, {ChangeEvent, FC, useState} from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import {ButtonLink} from "./button-link";

const UnknownURL: FC = () => <h1>404 Error</h1>;

const Nested: FC = () => (
    <div>
        <h1>I am a nested route</h1>
    </div>
);

const Greeting: FC = () => {
    const {name} = useParams<{name: string}>();

    return (
        <div>
            <h1>Hello {name}</h1>
            This is an example of receiving parameters in the route
        </div>
    );
};

const Authenticated: FC = () => (
    <h1>You should not be here unless authenticated</h1>
);

const Header: FC = () => {
    const {path} = useRouteMatch();

    return (
        <div>
            <ButtonLink to={`${path}/greeting/John`}>
                Button Style Link 1
            </ButtonLink>
            <ButtonLink to={`${path}/greeting/Jane`}>
                Button Style Link 2
            </ButtonLink>
        </div>
    );
};

export const RoutingHooksExample: FC = () => {
    const [authenticated, setAuthenticated] = useState(true);
    const toggleAuthenticate = (e: ChangeEvent<HTMLInputElement>) => setAuthenticated(e.target.checked);
    const {path} = useRouteMatch();

    return (
        <div className="row">
            <aside className="col-4 bg-light">
                <ul>
                    <li><Link to={`${path}/nested-component`}>Nested Route</Link></li>
                    <li><Link to={`${path}/greeting/John`}>Parameter Example 1</Link></li>
                    <li><Link to={`${path}/greeting/Jane`}>Parameter Example 2</Link></li>
                    {authenticated
                        ? <li><Link to={`${path}/authenticaed`}>Authenticated</Link></li>
                        : null}
                </ul>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           onChange={toggleAuthenticate} checked={authenticated}/>
                    <label className="form-check-label">Authenticated</label>
                </div>
            </aside>
            <div className="col">
                <Header/>
                <Switch>
                    <Route path={`${path}/`} exact={true} render={() => <></>}/>
                    <Route path={`${path}/nested-component`} component={Nested}/>
                    <Route path={`${path}/greeting/:name`} component={Greeting}/>
                    <Route path={`${path}/authenticaed`}
                           render={() => (authenticated
                               ? <Authenticated/>
                               : <Redirect to={`${path}/nested-component`}/>)}/>
                    <Route component={UnknownURL}/>
                </Switch>
            </div>
        </div>
    );
}
