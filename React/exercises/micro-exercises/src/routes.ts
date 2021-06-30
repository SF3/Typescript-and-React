import {ComponentType} from "react";
import {UserFormViewExercise} from "./UserForm/UserFormViewExercise";
import {AsyncAwaitExercise} from "./AsyncAwait/AsyncAwaitExercise";
import {LazyLoadingExercise} from "./LazyLoading/Routing";
import {RoutingExercise} from "./Routing/Routing";
import {ReduxExercise} from "./Redux/ReduxExercise";

interface Route {
    path: string;
    component: ComponentType<any>;
    title: string;
}

export const routes: Route[] = [
    {path: '/user-form', component: UserFormViewExercise, title: "1. User Form (View Only)"},
    {path: '/async-await', component: AsyncAwaitExercise, title: "2. Async Await"},
    {path: '/redux', component: ReduxExercise, title: "3. Redux"},
    {path: '/routing', component: RoutingExercise, title: "4. Routing"},
    {path: '/lazyloading', component: LazyLoadingExercise, title: "5. Lazy Loading"},
];
