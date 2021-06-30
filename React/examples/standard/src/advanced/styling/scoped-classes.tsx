import React, {FunctionComponent} from 'react';

import styles from './scoped-classes.module.scss';

export const CssModulesImports: FunctionComponent = () => (
    <div className={styles.panel}>
        <h2 className={styles.title}>CSS Modules</h2>
        <p>
            We can use CSS Modules to import styles that are local to
            a component. The CSS modules processing provides an object
            to access each style.
        </p>
        <p>
            When we look at the classes they will be
            unique. For create-react-app, we simply name our file
            'module.[s]css'.
        </p>
    </div>
);

