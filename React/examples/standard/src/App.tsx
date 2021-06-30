import React from 'react';
import {Link, Route} from "react-router-dom";
import {AccessingDomExample} from "./advanced/accessing-dom/accessing-dom-example";
import {HelloWorldExample} from "./basic/hello-world/hello-world-example";
import {TaskApp} from "./basic/layering/task-app";
import {ComponentLifecycleExample} from "./basic/component-lifecycle/component-lifecycle";
import {PropsExample} from "./basic/properties/properties";
import {PureComponentExample} from "./basic/pure-components/pure-components";
import {PropTypesExample} from "./basic/property-types/property-types";
import {StateExample} from "./basic/state/state";
import {RerenderingExample} from "./basic/re-rendering/rerendering";
import {CourseApp} from "./basic/remote-services/course-app";
import {PureComponentFunctionalExample} from "./basic/pure-components-functional/pure-components";
import {BatchedStateExample} from "./basic/batched-set-state/batched-state";
import {RenderVsConstructExample} from "./basic/render-vs-construct/render-vs-construct";
import {StylingExample} from "./advanced/styling/styling";
import {RoutingExample} from "./advanced/routing/routing";
import {LazyLoadingExample} from "./advanced/react-lazy/code-splitting";
import {PureComponentHooksExample} from "./hooks/pure-components/pure-components";
import {StateHookExample} from "./hooks/state/state";
import {UseEffectsCleanupExample} from "./hooks/component-lifecycle/use-effects-cleanup";
import {AccessingDomHooksExample} from "./hooks/accessing-dom/accessing-dom-example";
import {BatchedStateHookExample} from "./hooks/batched-state/batched-state";
import {ReactDataTypeExample} from "./basic/react-data-types/react-data-type";
import {UseEffectAllVariantsExample} from "./hooks/component-lifecycle/use-effects-all-variants";
import {AsyncEffectsExample} from "./hooks/async-effects/async-effects";
import {RoutingHooksExample} from "./advanced/routing/routing-hooks";
import {CodeSplittingExample} from "./advanced/code-splitting/code-splitting";
import {I18NExample} from "./advanced/i18n/i18n";
import {FormikExample} from "./advanced/formik/formik";

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <aside className="col-3 bg-light">
                    <h5>Basic</h5>
                    <ul>
                        <li><Link to="/hello-world">Hello World</Link></li>
                        <li><Link to="/data-types">Data Types</Link></li>
                        <li><Link to="/properties">Properties</Link></li>
                        <li><Link to="/state">State</Link></li>
                        <li><Link to="/render-vs-construct">Render vs Construct</Link></li>
                        <li><Link to="/rerendering">Re-rendering</Link></li>
                        <li><Link to="/batchedstate">Batched State Updates</Link></li>
                        <li><Link to="/component-lifecycle">Component Lifecycle (Ticker)</Link></li>
                        <li><Link to="/layering">Layering (Task App)</Link></li>
                        <li><Link to="/pure-components">Pure Components</Link></li>
                        <li><Link to="/pure-components-functional">Pure Components - Functional</Link></li>
                        <li><Link to="/prop-types">Prop Types</Link></li>
                        <li><Link to="/rest">REST (Course App)</Link></li>
                    </ul>
                    <h5>Advanced</h5>
                    <ul>
                        <li><Link to="/styling">Styling</Link></li>
                        <li><Link to="/accessing-dom">Accessing Dom</Link></li>
                        <li><Link to="/routing">Routing</Link></li>
                        <li><Link to="/routing-hooks">Routing Hooks</Link></li>
                        <li><Link to="/code-splitting">Code Splitting</Link></li>
                        <li><Link to="/lazy-loading">Lazy Loading</Link></li>
                        <li><Link to="/formik">Formik</Link></li>
                        <li><Link to="/i18n">Internationalisation</Link></li>
                    </ul>
                    <h5>Hooks</h5>
                    <ul>
                        <li><Link to="/state-hooks">State (useState)</Link></li>
                        <li><Link to="/batched-state-hooks">Batched State (useState)</Link></li>
                        <li><Link to="/lifecycle-hooks-cleanup">Life Cycle - Clean up (useEffect)</Link></li>
                        <li><Link to="/lifecycle-hooks-all-variants">Life Cycle - All Variants (useEffect)</Link></li>
                        <li><Link to="/async-effects">Async Effects (useEffect)</Link></li>
                        <li><Link to="/pure-components-hooks">Purity (useMemo, useCallback etc.)</Link></li>
                        <li><Link to="/dom-hooks">Accessing DOM (useRef)</Link></li>
                    </ul>
                </aside>
                <div className="col ml-3">
                    <Route path='/hello-world' component={HelloWorldExample}/>
                    <Route path='/data-types' component={ReactDataTypeExample}/>
                    <Route path='/properties' component={PropsExample}/>
                    <Route path='/state' component={StateExample}/>
                    <Route path='/render-vs-construct' component={RenderVsConstructExample}/>
                    <Route path='/rerendering' component={RerenderingExample}/>
                    <Route path='/batchedstate' component={BatchedStateExample}/>
                    <Route path='/component-lifecycle' component={ComponentLifecycleExample}/>
                    <Route path='/layering' component={TaskApp}/>
                    <Route path='/pure-components' component={PureComponentExample}/>
                    <Route path='/pure-components-functional' component={PureComponentFunctionalExample}/>
                    <Route path='/prop-types' component={PropTypesExample}/>
                    <Route path='/accessing-dom' component={AccessingDomExample}/>
                    <Route path='/rest' component={CourseApp}/>
                    <Route path='/styling' component={StylingExample}/>
                    <Route path='/routing' component={RoutingExample}/>
                    <Route path='/routing-hooks' component={RoutingHooksExample}/>
                    <Route path='/code-splitting' component={CodeSplittingExample}/>
                    <Route path='/lazy-loading' component={LazyLoadingExample}/>
                    <Route path='/formik' component={FormikExample}/>
                    <Route path='/i18n' component={I18NExample}/>
                    <Route path='/state-hooks' component={StateHookExample}/>
                    <Route path='/batched-state-hooks' component={BatchedStateHookExample}/>
                    <Route path='/lifecycle-hooks-cleanup' component={UseEffectsCleanupExample}/>
                    <Route path='/lifecycle-hooks-all-variants' component={UseEffectAllVariantsExample}/>
                    <Route path='/async-effects' component={AsyncEffectsExample}/>
                    <Route path='/pure-components-hooks' component={PureComponentHooksExample}/>
                    <Route path='/dom-hooks' component={AccessingDomHooksExample}/>
                </div>
            </div>
        </div>
    );
};

export default App;
