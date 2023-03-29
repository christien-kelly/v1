import * as React from 'react'
import { aboutHeader } from '../../styles/about.module.css'


const About = () => {
    return (
        <section id='about' className='interim-section'>
            <div className='section__content'>
                <div className={aboutHeader}>About Me <div className='dash' /></div>
                <div>
                    <p>Hello! My name is Christien and I like building and exploring. 
                    My first tast of web development started back in 2013 when I took my first 
                    class in high school where I spent copious hours hacking away at HTML and CSS. 
                    
                    Fast Forward to today and now I'm working as a software engineer at 
                    <span><a href='https://www.cardata.co/'>CarData Consultants</a></span>. 

                    Outside of programming, I spend my time swimming competitively in Montréal, training to qualify for 
                    the 2024 Olympics. 

                    I also write articles whenever I think of something worth sharing.
                    
                    Here are a few technologies I’ve been working with recently:</p>
                    <div>Image</div>
                </div>
            </div>
        </section>
    )
};

export default About;