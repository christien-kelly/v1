import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import { 
    aboutHeader,
    aboutContent,
    aboutContent__textWrapper,
    aboutContent__profileImage,
    profileImage,
    profileImage__container,
    aboutContent__textWrapper__tools
 } from '../../styles/about.module.css'


const About = () => {
    return (
        <section className='intrim-section' id='about'>
            <div className='section__content'>
            <div className={aboutHeader}>About Me<div className='dash' /></div>
            <div className={aboutContent}>
                <div className={aboutContent__textWrapper}>
                    <p>I am a software engineer who likes building 
                    and exploring new industry tech and frameworks.</p>

                    <p>My programming journey started in 2013 when I spent copious hours hacking 
                    together single-page sites with HTML and CSS.</p>

                    <p>Fast Forward to today, and now I've worked with an 
                    <span> <a href='https://www.harmreductionohio.org/'>American NGO</a></span>, a 
                    <span> <a href='https://www.binnoojiiyag.ca/'>Canadian NGO</a></span>, and an
                    <span> <a href='https://www.sharemobility.com/'>American startup</a></span>. Right now I currently have 
                    the privilege of working as a software engineer at 
                    <span> <a href='https://www.cardata.co/'>CarData Consultants</a></span>. 
                    Outside of programming, I swim competitively in Montréal, 
                    training to qualify for the 2024 Olympics.</p>

                    <p>Some technologies I've been working with recently:</p>

                    <div className={aboutContent__textWrapper__tools}>
                        <ul>
                            <li>Laravel</li>
                            <li>JavaScript (ES6+)</li>
                            <li>ReactJS</li>
                        </ul>
                        <ul>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                <div className={aboutContent__profileImage}>
                    <StaticImage 
                        alt='profile image'
                        src={"../../../public/images/profile-image.png"}
                        imgClassName={profileImage}
                        className={profileImage__container}
                    />
                </div>
            </div>
            </div>
        </section>
    )
};

export default About;