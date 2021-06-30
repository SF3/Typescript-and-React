import * as React from 'react';
import {routes} from "./routes";
import {Route} from "react-router";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div className="container mt-3">
            <div className="row">
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
        </div>
    );
};

export default App;
