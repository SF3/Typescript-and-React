import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FormikManualExample} from "./formik-manual";
import {FormikComponentExample} from "./formik-components";
import {FormikYupExample} from "./formik-yup";


export const FormikExample = () => {
    const {path} = useRouteMatch();

    return (
        <div className="row">
            <aside className="col-4 bg-light">
                <ul>
                    <li><Link to={`${path}/manual`}>Formik Basics</Link></li>
                    <li><Link to={`${path}/components`}>Formik Components</Link></li>
                    <li><Link to={`${path}/yup`}>Combining with Yup</Link></li>
                </ul>
            </aside>
            <div className="col">
                <Switch>
                    <Route path={`${path}/manual`} exact={true} component={FormikManualExample}/>
                    <Route path={`${path}/components`} exact={true} component={FormikComponentExample}/>
                    <Route path={`${path}/yup`} exact={true} component={FormikYupExample}/>
                </Switch>
            </div>
        </div>
    );
}
