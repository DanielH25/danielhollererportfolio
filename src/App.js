import './App.css';
import CV from './CV.pdf';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';
import ContactForm from './components/ContactForm/ContactForm';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="container">
      <div className='slides-header'>
        <Header />
      </div>
      <div className='slides-about'>
        <About />
      </div>
      <div className='slides-projects'>
        <Projects />
      </div>
      <div className='slides-contact'>
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