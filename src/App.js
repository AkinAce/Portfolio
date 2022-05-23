import React from 'react';
import Landing from './components/landing';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Projects from './components/projects';
import Contacts from './components/contact';
import Footer from './components/footer';
import './App.css';
import './index.css';
import './images/backgrounds.css';





function App() {
  return (
    <React.Fragment>
      
      <div className="App">
        <header>
          {/*<NavBar/>*/}
        </header>

        <main>
          <section>
            <Landing/>         
          </section>
        
          <svg className='aboutDivision' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,218.7C960,213,1200,235,1320,245.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
          <section>
            <AboutMe/>
          </section>

          <section>
            <Skills/>
          </section>

          <section>
            <Projects/>
          </section>
        
          <svg className='contactDivision'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,192C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        
          <section>
            <Contacts/>
          </section>
        </main>

        <footer>
          <Footer/>
         </footer>        
      </div>
      
    </React.Fragment>
  );
}

export default App;
