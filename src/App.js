import './App.css';
import CV from './CV.pdf';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Icons />
      <Header />
      <DownloadButton CV={CV} />
      <ContactForm/>
    </div >
  );
}

export default App;