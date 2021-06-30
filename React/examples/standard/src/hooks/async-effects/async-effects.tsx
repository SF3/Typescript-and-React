import React, {FC} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import {ExampleDescription} from "./description";
import {AsyncInitialisationIncorrect} from "./incorrect";
import {AsyncInitialisationCrash} from "./crash";
import {AsyncInitialisationCorrect} from "./correct";
import {AsyncInitialisationCustomHook} from "./custom-hook";

const UnknownURL: FC = () => <h1>404 Error</h1>;

export const AsyncEffectsExample: FC = () => {
    const match = useRouteMatch();

    return (
        <div className="row">
            <aside className="col-4 bg-light">
                <ul>
                    <li><Link to={`${match.path}/`}>Description</Link></li>
                    <li><Link to={`${match.path}/async-effect-crash`}>Crash</Link></li>
                    <li><Link to={`${match.path}/async-effect-incorrect`}>Incorrect</Link></li>
                    <li><Link to={`${match.path}/async-effect-correct`}>Correct</Link></li>
                    <li><Link to={`${match.path}/async-effect-custom-hook`}>Custom Hook</Link></li>
                </ul>
            </aside>
            <div className="col">
                <Switch>
                    <Route path={`${match.path}/`} exact={true} component={ExampleDescription}/>
                    <Route path={`${match.path}/async-effect-crash`} component={AsyncInitialisationCrash}/>
                    <Route path={`${match.path}/async-effect-incorrect`} component={AsyncInitialisationIncorrect}/>
                    <Route path={`${match.path}/async-effect-correct`} component={AsyncInitialisationCorrect}/>
                    <Route path={`${match.path}/async-effect-custom-hook`} component={AsyncInitialisationCustomHook}/>
                    <Route component={UnknownURL}/>
                </Switch>
            </div>
        </div>
    );
}
