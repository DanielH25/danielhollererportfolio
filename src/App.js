import './App.css';
import CV from './CV.pdf';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DownloadButton CV={CV} />
    </div >
  );
}

export default App;