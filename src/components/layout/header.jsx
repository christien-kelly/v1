import * as React from 'react';
import { 
    headerContainer,
    navLink,
    navItemsContainer,
    logoContainer,
    navButton
 } from '../../styles/header.module.css';

const Header = () => {
    return (
        <div className={headerContainer}>
            <div className={logoContainer}>
                C
            </div>
            <div className={navItemsContainer}>
                <ul className='nav-items'>
                    <li className={navLink}>About</li>
                    <li className={navLink}>Experience</li>
                    <li className={navLink}>Projects</li>
                </ul>
                <a target='_blank' rel="noreferrer" href={`docs/Christien Kelly - Resume.pdf`}>
                    <button className={navButton}>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    ) 
};

export default Header;