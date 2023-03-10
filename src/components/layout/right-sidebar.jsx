import * as React from 'react';
import { 
    leftNavContainer,
    sidebarNavFooter,
    sidebarNavEmail
} from '../../styles/layout.module.css'

const RightSideBar = () => {
    return (
        <div className={leftNavContainer}>
            <div className={sidebarNavEmail}>christien.kelly@gmail.com</div>
            <div className={sidebarNavFooter}></div>
        </div>
    );
}

export default RightSideBar;