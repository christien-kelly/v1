import { Link } from 'gatsby';
import * as React from 'react';
import { 
    leftNavContainer,
    sidebarNavFooter,
    sidebarNavEmail
} from '../../styles/layout.module.css'

const RightSideBar = () => {
    return (
        <div className={leftNavContainer}>
            <div className={sidebarNavEmail}>
                <Link 
                    to='mailto:christien.kelly@gmail.com'
                    target='_blank'
                    >christien.kelly@gmail.com
                </Link>
            </div>
            <div className={sidebarNavFooter}></div>
        </div>
    );
}

export default RightSideBar;