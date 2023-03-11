import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsMedium } from 'react-icons/bs';
import { Link } from 'gatsby';
import { 
    leftNavContainer,
    sidebarNavFooter,
    sidebarNavIcon
} from '../../styles/layout.module.css';

const LeftSideBar = () => {
    return (
        <div className={leftNavContainer}>
            <div className={sidebarNavIcon}>
                <Link 
                    to='https://github.com/christien-kelly/'
                    target='_blank'
                    ><FiGithub size={26}/>
                </Link>
            </div>
            <div className={sidebarNavIcon}>
                <Link 
                    to='https://www.linkedin.com/in/christien-k-770080107/'
                    target='_blank'
                    ><FiLinkedin size={26}/>
                </Link>
            </div>
            <div className={sidebarNavIcon}>
                <Link 
                    to='https://christien-kelly.medium.com/'
                    target='_blank'
                    ><BsMedium size={26}/>
                </Link>
            </div>
            <div className={sidebarNavFooter}></div>
        </div>
    );
}

export default LeftSideBar;