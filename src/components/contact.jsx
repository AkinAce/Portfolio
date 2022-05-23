import React from 'react';
import '../index.css';
import Form from '../contactForm/form';
import Social from './social.jsx';
import ContactIcon from '../components/animatedContactImage.jsx'

const Contact = () => {
    return ( 
        <div id="contact" className='contact'>
            <h2 id="contactHeader"className='sectionHeaders'>Talk To Me.</h2> 
            <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="contactFlex">
                <div className="contactAvi"><ContactIcon/></div>
                <div className="contactFlexItem">
                    <p>Working on a project? Need to fill a position? I'm available to take up front-end development roles.</p> 
                    <p>I'm equally open to comments, suggestions and questions.</p> 
                    <p>Fill the form below or reach me directly : <a id="contactMail" href="mailto:akintundesallam@gmail.com?subject=Hey Akin!" target="_blank" rel='noreferrer' title='Talk to Akin'>akintundesallam@gmail.com</a></p>
                </div>   
                </div>      
                    <Form/>
                    <a href="#homepage">
                        <div id="topLink">
                            <svg id="topLinkIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                            <div id="topLinkBox">TOP</div>
                        </div>
                    </a>  
                    <div className="contactSocials"><Social/>
                    </div>     
                </div>
            </div>
     );
}
 
export default Contact;