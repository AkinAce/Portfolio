import React from 'react';
import '../index.css';
import Akin from '../images/Akins.png'
import Social from './social.jsx';

const AboutMe = () => {
    return (
    <div id="about" className='aboutMe'>              
        <div className='aboutContent' > 
        <h2 id="aboutHeader" className='sectionHeaders'>About Me.</h2>   
            <div className="aboutFlex" data-aos='fade-up' data-aos-duration="1000" >
                <img src={Akin} alt="Akintunde Sallam"  class="aboutAvi"></img>   
                <div className="aboutFlexItem">
                    <p>Hello! My name is Akintunde, I'm a Front-End Developer based in Ontario, Canada. I enjoy solving problems and creating aesthetically pleasing stuff for the internet. My journey into the creative industry started years ago as a Freelance Graphics Designer creating visual concepts to communicate ideas for many businesses of various sizes.</p>
                    <p>These days I create accessible, user-oriented online experiences using a combination of design, technology and research. I'm excited to gain new experiences, improve my current skill set and pick up new interests along the way. </p>
                    <p>When I'm not coding, you can find me at the edge of my seat watching a game of football or catching a Formula 1 race. "All work and no play...." or whatever Michael Scott said.</p>
                </div>
            </div>      
            <div data-aos="fade-up" data-aos-duration="1000" className="aboutSocials"><Social/></div>  
        </div>
    </div>
    );
} 
export default AboutMe;

