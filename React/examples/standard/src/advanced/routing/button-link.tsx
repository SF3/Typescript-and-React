import {Link} from "react-router-dom";
import React, {FunctionComponent} from "react";
import {Route} from "react-router";

const buttonClass = (match: boolean) => match ? "btn btn-primary" : "btn btn-outline-primary";

interface Props {
    to: string;
    children: React.ReactNode;
}

export const ButtonLink: FunctionComponent<Props> = ({to, children}) => (
    <Route path={to} exact={true} children={({match}) =>
        <Link to={to}>
            <button className={buttonClass(match != null)}>{children}</button>
        </Link>}/>
);
