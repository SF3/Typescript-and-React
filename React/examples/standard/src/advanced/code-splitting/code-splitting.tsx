import React, {FC, useState} from "react";

export const CodeSplittingExample: FC = () => {
    const [DelayedComponent, setDelayedComponent] = useState<FC<{ source?: string }> | null>(null);

    const loadModule = async () => {
        console.log('Loading module');
        const {DelayedComponent} = await import('./delayed-module');
        console.log('Module loaded');
        // Note we need to use the function form os set here
        // Otherwise it thinks DelayedComponent is the setter and calls it
        setDelayedComponent(() => DelayedComponent);
    };

    return (
        <div>
            <button onClick={loadModule}>Load Module</button>
            {DelayedComponent
                ? <DelayedComponent source="Eager Module"/>
                : null}
        </div>
    );
}
