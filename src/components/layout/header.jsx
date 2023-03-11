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
                <button className={navButton}>
                    Resume
                </button>
            </div>
        </div>
    ) 
};

export default Header;