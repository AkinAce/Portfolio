import React from 'react';
import '../index.css';
import websiteProjectImage from '../images/personalWebsite.svg'
import inDevelopmentImage from '../images/inDevelopment.svg'


const Projects = () => {
    return ( 
     <div id="projects" className='projects'> 
     <h2 id= 'projectsHeader' className='sectionHeaders'>Projects.</h2> 
     <h3 className='sectionInfo'>Here are a few projects I've worked on recently. Want to collaborate? <a href="#contact">Get in touch.</a></h3>
     <div className="projectsContainer" >
         <ul className="projectsFlex">
            <div data-aos="zoom-in" data-aos-duration="1000">
                <li className="projectBox">
                    <img src={websiteProjectImage} alt="Personal Website Project" className='projectImage' />
                    <div className='projectInfo'>
                        <div className="projectInfoText">
                            <h3>Portfolio Website </h3>
                            <span className="myBadge">
                                <a title="Live Link to Personal Website" href="https://www.akintunde.dev/" >Live Site</a>
                            </span>
                            <span className="myBadge">
                                <a title="Personal Website Github" href="https://github.com/AkinAce/Portfolio" >Github</a>
                            </span>                   
                            <p>A simple website showcasing my skills, work experience and information about myself as a frontend developer.  </p>
                        </div>
                    </div>
                </li>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000">
                <li className="projectBox inDevelopment">
                    <img src={inDevelopmentImage} alt="Project Website" className='projectImage' />
                    <div className='projectInfo'>
                        <div className="projectInfoText">
                            <h3>Project Website</h3>
                            <span className="myBadge">
                                {/*<a title="" href="" >Live Site</a>*/}
                            </span>
                            <span id="devBadge" className="myBadge">
                                <p id="devButton">In Development</p>
                            </span>
                            <span className="myBadge">
                                {/*<a title="" href="" >Github</a>*/}
                            </span>                     
                            <p>A simple website showcasing my skills, work experience and information about myself as a frontend developer.  </p>
                        </div>
                    </div>
                </li>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000">
                <li className="projectBox inDevelopment ">
                    <img src={inDevelopmentImage} alt="Project Website" className='projectImage' />
                    <div className='projectInfo'>
                        <div className="projectInfoText">
                            <h3> Project Website</h3>
                            <span className="myBadge">
                                {/*<a title="" href="" >Live Site</a>*/}
                            </span>
                            <span id="devBadge" className="myBadge">
                                <p id="devButton">In Development</p>
                            </span>
                            <span className="myBadge">
                                {/*<a title="" href="" >Github</a>*/}
                            </span>                   
                            <p>A simple website showcasing my skills, work experience and information about myself as a frontend developer.  </p>
                        </div>
                    </div>
                </li>
            </div>           
         </ul>
     </div>
     <div className="projectsSpacer"></div>
     </div>   
    );
}
 
export default Projects;