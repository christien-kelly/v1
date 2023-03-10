import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { 
    leftNavContainer,
    sidebarNavFooter,
    sidebarNavIcon
} from '../../styles/layout.module.css'

const LeftSideBar = () => {
    return (
        <div className={leftNavContainer}>
            <div className={sidebarNavIcon}><FiGithub size={26}/></div>
            <div className={sidebarNavIcon}><FiLinkedin size={26}/></div>
            <div className={sidebarNavIcon}><HiOutlineMail size={26}/></div>
            <div className={sidebarNavFooter}></div>
        </div>
    );
}

export default LeftSideBar;