import * as React from 'react';
import {contentContainer} from '../../styles/layout.module.css';

const Layout = ({ children }) => {
    return (
        <main className={contentContainer}>
            { children }
        </main>
    )
}

export default Layout;