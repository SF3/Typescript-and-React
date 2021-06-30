import * as React from "react";
import {FC, useEffect, useRef, useState} from 'react'

interface Props {
    name: string;
}

// Add React.memo here to stop unnecessary re-renders
const Message: FC<Props> = ({name}) => {
    const header = useRef<HTMLHeadingElement>(null);
    console.log(`Rendering ${name}`);

    useEffect(() => {
        console.log('At this point the ref has been populated');
        (header.current as HTMLHeadingElement).innerHTML = `Component ${name} has reference to the HTML`
    }, [name]);

    return <div>
        <h2 ref={header}> </h2>
    </div>
};


export const AccessingDomHooksExample = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    return (
        <div>
            <div>
                <button className='btn btn-primary mr-2' onClick={incrementCounter}>Re-render</button>
                {counter}
            </div>
            <Message name="one"/>
            <Message name="two"/>
        </div>
    );
};
