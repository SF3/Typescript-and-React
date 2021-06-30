import React, {FC} from 'react';

const StringComponent: FC = () => <>{'Simple string'}</>;
const NumberComponent: FC = () => <>{42}</>;
const NullComponent: FC = () => <>{null}</>;
const UndefinedComponent: FC = () => <>
    {undefined /* This cannot be returned by render directly */}
    </>;
const TrueComponent: FC = () => <>{true}</>;
const FalseComponent: FC = () => <>{false}</>;
const ArrayComponent: FC = () => <>{[1, 2, 3, 5, ['a', 'b', 'c']]}</>;

export const ReactDataTypeExample = () => (
    <>
        <h1>Valid React JSX Expressions</h1>
        <p>This page contains HTML elements, components and other valid content</p>
        <div><StringComponent/></div>
        <div><NumberComponent/></div>
        <div><ArrayComponent/></div>
        <div>
            <hr/>
            <h2>Non-render elements</h2>
            <NullComponent/>
            <UndefinedComponent/>
            <TrueComponent/>
            <FalseComponent/>
            <hr/>
        </div>
    </>
);
