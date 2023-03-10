import * as React from 'react';
import LeftSideBar from './left-sidebar';
import {
    contentContainer
} from '../../styles/layout.module.css';
import RightSideBar from './right-sidebar';

const Layout = ({ children }) => {
    return (
        <main className={contentContainer}>
            <LeftSideBar />
            { children }
            <RightSideBar />
        </main>
    )
}

export default Layout;