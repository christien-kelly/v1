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
            <a href='#hero'>
                <div className={logoContainer}>
                    👨🏾‍💻
                </div>
            </a>
            <div className={navItemsContainer}>
                <ul className='nav-items'>
                    <li className={navLink}><a href='#about'>About</a></li>
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