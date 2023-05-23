import './App.css';
import CV from './CV.pdf';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';
import ContactForm from './components/ContactForm/ContactForm';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

//
function App() {
  return (
    <div className="container">
      <Icons />
      
      <Navbar/>
      <div className='slides-header' id="home">
        <Header />
      </div>
      <div className='slides-about' id="about">
        <About />
      </div>
      <div className='slides-projects' id="projects">
        <Projects />
      </div>
      <div className='slides-contact' id="contact">
        <ContactForm />
      </div>
    </div >
  );
}
//<Icons />
//<Header />
//<DownloadButton CV={CV} />
//<About />
//<Projects />
//<ContactForm />
export default App;