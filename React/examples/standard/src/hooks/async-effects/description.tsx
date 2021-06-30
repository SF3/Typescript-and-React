import React, {FC} from "react";

export const ExampleDescription: FC = () => (
    <div>
        <h2>Async Effects Example</h2>
        <p>This example shows how to write effects that do async work.</p>
        <p>
            <code>useEffect</code> should return either nothing or a function
            to clean up the effect. They should be
            synchronous and not return anything else so having an async function
            which returns a promise is incorrect.
        </p>
        <h3>Crash Example</h3>
        <p>
            Trying navigating to crash example - it should report a warning about
            using an async function with <code>useEffect</code>.
            What's more, if you try navigating back
            to this link you should see the app fall over.
            This is because <code>useEffect</code> is trying to call the promise returned
            by the sync func.
        </p>
        <h3>Incorrect Example</h3>
        <p>
            The incorrect solution provides a partial fix but not is completely correct.
            Try clicking on the incorrect example below, and <strong>before</strong> the timer
            expires navigate back to this view. You will also see errors for state
            being modified after the component has been unmounted.
        </p>
        <h3>Correct Example</h3>
        <p>
            The correct solution will behave correctly by checking if the component has completed.
            If there was a cancel mechanism you can also use that in the clean up.
            You will notice the code is more complex. You may want to break these out as custom hooks or
            use a library to simplify this syntax.
        </p>
    </div>
);
