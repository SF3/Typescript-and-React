import {ComponentType} from "react";
import {HelloRedux} from "./HelloRedux/HelloRedux";
import {Typesafe} from "./Typesafe/Typesafe";
import {Thunk} from "./Thunk/Thunk";
import {MiddlewareDemo} from "./Middleware/Middleware";
import {EasyPeasyExample} from "./easy-peasy/EasyPeasyExample";
import {MobXExample} from "./MobX/MobXExample";
import {PerfReduxToolkit} from "./Performance/SimpleToolkit/PerfReduxToolkit";
import {PerfMultipleConnected} from "./Performance/MultipleConnected/PerfMultipleConnected";
import {PerfBasicRedux} from "./Performance/BasicRedux/PerfBasicRedux";
import {HelloReduxToolkit} from "./HelloReduxToolkit/HelloReduxToolkit";
import {ReduxToolkitSlices} from "./ReduxToolkitSlice/ReduxToolkitSlices";
import {ReduxToolkitHooks} from "./ReduxToolkitHooks/ReduxToolkitHooks";
import {ReduxToolkitThunk} from "./ReduxToolkitThunk/ReduxToolkitThunk";

interface Route {
    path: string
    component: ComponentType,
    title: string
}

export const routes: Route[] = [
    {path: '/hello', component: HelloRedux, title: "Hello Redux"},
    {path: '/typesafe', component: Typesafe, title: "Typesafe"},
    {path: '/middleware', component: MiddlewareDemo, title: "Middleware"},
    {path: '/thunk', component: Thunk, title: "Async (Thunks)"},
    {path: '/hello-toolkit', component: HelloReduxToolkit, title: "Hello Redux Toolkit"},
    {path: '/toolkit-slices', component: ReduxToolkitSlices, title: "Redux Toolkit Slices"},
    {path: '/toolkit-hooks', component: ReduxToolkitHooks, title: "Redux Toolkit Hooks"},
    {path: '/toolkit-thunk', component: ReduxToolkitThunk, title: "Redux Toolkit Thunk"},
    {path: '/easy-peasy', component: EasyPeasyExample, title: "easy-peasy"},
    {path: '/mobx', component: MobXExample, title: "MobX"},
    {path: '/perf-basic-redux', component: PerfBasicRedux, title: "Perf - Basic Redux"},
    {path: '/perf-simple-toolkit', component: PerfReduxToolkit, title: "Perf - Redux Toolkit"},
    {path: '/perf-multiple-connected', component: PerfMultipleConnected, title: "Perf - Multiple Connected"}
];
