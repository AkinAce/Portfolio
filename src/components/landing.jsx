import React from 'react';
import '../index.css';
import NavBar from './navBar';
//import landingImage from '../images/landingImage.svg'
import Icon from '../components/animatedImage.jsx'


const Landing = () => {
    return ( 
        <div id="homepage" className="landing"> 
        <div className="landingSpacer"></div>
            <NavBar/>
            <div className='landingContent' data-aos="zoom-in" data-aos-duration="1000">
                 <div className="landingFlex">
                    <div className="landingFlexItem">
                        <h2 className='landingTitle'>Akintunde Sallam</h2> 
                        <h2 className='landingSubtitle'>Front-End Developer</h2> 
                        <p>Passionate about building functional and elegant digital experiences. I solve problems and write clean, efficient code for stuff that live on the internet.</p>
                        <a href="#contact" id='landingLink'>
                            <button className='landingBadge'>Get In Touch</button>
                        </a>
                    </div>
                    <div className='landingAvi'>
                        <Icon/>
                    </div>                  
                </div>       
             </div>                       
        </div>
    );
}
export default Landing;

