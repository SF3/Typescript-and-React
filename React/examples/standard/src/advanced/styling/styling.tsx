import React, {FunctionComponent} from 'react';
import {Bootstrap} from "./bootstrap";
import {GlobalStyleImports} from "./global-style-imports";
import {CssModulesImports} from "./scoped-classes";
import {InlineStyles} from "./inline-styles";
import {StyledComponents} from "./styled-components";

export const StylingExample: FunctionComponent = () => (
    <div className='m-2'>
        <Bootstrap/>
        <hr/>
        Beware the components below - they were designed by a developer!
        <hr/>
        <GlobalStyleImports/>
        <InlineStyles/>
        <CssModulesImports/>
        <StyledComponents/>
        <StyledComponents/>
    </div>
);
