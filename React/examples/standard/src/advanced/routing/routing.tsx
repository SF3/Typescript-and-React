import React, {ChangeEvent, Component, FC} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import {ButtonLink} from "./button-link";

const UnknownURL: FC = () => <h1>404 Error</h1>;

const Nested: FC = () => (
    <div>
        <h1>I am a nested route</h1>
    </div>
);

const Greeting: FC<RouteComponentProps<{ name: string }>> = (props) => (
    <div>
        <h1>Hello {props.match.params.name}</h1>
        This is an example of receiving parameters in the route
    </div>
);

const Authenticated: FC = () => (
    <h1>You should not be here unless authenticated</h1>
);

const Header: FC<RouteComponentProps> = (props) => (
    <div>
        <ButtonLink to={`${props.match.path}/greeting/John`}>
            Button Style Link 1
        </ButtonLink>
        <ButtonLink to={`${props.match.path}/greeting/Jane`}>
            Button Style Link 2
        </ButtonLink>
    </div>
);

interface State {
    authenticated: boolean;
}

export class RoutingExample extends Component<RouteComponentProps, State> {
    state = {
        authenticated: true
    };

    toggleAuthenticate = (e: ChangeEvent<HTMLInputElement>) =>
        this.setState({authenticated: e.target.checked});

    render() {
        return (
            <div className="row">
                <aside className="col-4 bg-light">
                    <ul>
                        <li><Link to={`${this.props.match.path}/nested-component`}>Nested Route</Link></li>
                        <li><Link to={`${this.props.match.path}/greeting/John`}>Parameter Example 1</Link></li>
                        <li><Link to={`${this.props.match.path}/greeting/Jane`}>Parameter Example 2</Link></li>
                        {this.state.authenticated
                            ? <li><Link to={`${this.props.match.path}/authenticaed`}>Authenticated</Link></li>
                            : null}
                    </ul>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               onChange={this.toggleAuthenticate} checked={this.state.authenticated}/>
                        <label className="form-check-label">Authenticated</label>
                    </div>
                </aside>
                <div className="col">
                    <Header {...this.props}/>
                    <Switch>
                        <Route path={`${this.props.match.path}/`} exact={true} render={() => <></>}/>
                        <Route path={`${this.props.match.path}/nested-component`} component={Nested}/>
                        <Route path={`${this.props.match.path}/greeting/:name`} component={Greeting}/>
                        <Route path={`${this.props.match.path}/authenticaed`}
                               render={() => (this.state.authenticated
                                   ? <Authenticated/>
                                   : <Redirect to={`${this.props.match.path}/nested-component`}/>)}/>
                        <Route component={UnknownURL}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
