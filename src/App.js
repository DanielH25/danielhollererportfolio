import './App.css';
import CV from './CV.pdf';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';

function App() {
  return (
    <div className="App">
      <Icons/>
      <Header />
      <DownloadButton CV={CV} />
      <div id="contact-form">
        
      </div>
    </div >
  );
}

export default App;