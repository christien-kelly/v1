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
            <a href='#home'>
                <div className={logoContainer}>
                    👨🏾‍💻
                </div>
            </a>
            <div className={navItemsContainer}>
                <ul className='nav-items'>
                    <a href='#about'><li className={navLink}>About</li></a>
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