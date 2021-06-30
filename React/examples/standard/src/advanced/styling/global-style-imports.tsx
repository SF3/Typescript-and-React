import React, {FunctionComponent} from 'react';

import './global-style-imports.scss';

export const GlobalStyleImports: FunctionComponent = () => (
    <div className='gsi-panel'>
        <h2 className='gsi-title'>Global Imports</h2>
        <p>
            Webpack allows us to import CSS/SCSS in JS files.
            The styles will be global so we need to name appropriately.
        </p>
        <p>
            To use SCSS with create-react-app we need to add
            the 'node-sass' package.
        </p>
        <div className='gsi-spin'>
            Bad Design!
        </div>
    </div>
);

