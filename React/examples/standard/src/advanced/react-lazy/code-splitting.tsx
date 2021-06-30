import React, {FC, Suspense, useState} from "react";

const DelayedComponent = React.lazy(() => import('./delayed-module'));

export const LazyLoadingExample: FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(true)}>Load Module</button>
            {show
                ? <Suspense fallback={'Loading....'}>
                    <DelayedComponent source="Eager Module"/>
                </Suspense>
                : null}
        </div>
    );
}
