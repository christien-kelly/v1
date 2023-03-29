import { Link } from 'gatsby';
import * as React from 'react';
import { 
    rightNavContainer,
    sidebarNavFooter,
    sidebarNavEmail
} from '../../styles/layout.module.css'

const RightSideBar = () => {
    return (
        <div className={rightNavContainer}>
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