import * as React from 'react';
import { Link } from 'gatsby';
import { 
    contentContainer,
    introSmallText,
    introName,
    introCaption,
    introTextContainer,
    introButton
 } from '../styles/intro.module.css';

const Intro = () => {
    return (
        <div className={contentContainer}>
            <p className={introSmallText}>Hello, my name is</p>
            <h2 className={introName}>Christien Kelly.</h2>
            <h2 className={introCaption}>I build things with code.</h2>
            <div className={introTextContainer}>
                <p>I’m a software engineer specializing in creating (and occasionally designing) 
                exceptional digital experiences seen and unseen. Currently, I'm focused on optimizing 
                performance and building accessible products at Cardata.</p>
            </div>
            <Link to='https://christien-kelly.medium.com/'><button class={introButton}>Read my articles!</button></Link>
        </div>
    );
}

export default Intro;