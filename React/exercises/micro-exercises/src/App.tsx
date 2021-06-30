import * as React from 'react';
import {routes} from "./routes";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import {FC} from "react";

const App: FC = () => (
    <div className="container">
        <div className="row mt-2">
            <aside className="col-3 bg-light">
                <ul>
                    {routes.map(x =>
                        (<li key={x.path}><Link to={x.path}>{x.title}</Link></li>))}
                </ul>
            </aside>
            <div className="col">
                {routes.map(x =>
                    (<Route key={x.path} path={x.path} component={x.component}/>))}
            </div>
        </div>
    </div>);

export default App;
