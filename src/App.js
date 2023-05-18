import './App.css';
import CV from './CV.pdf';

const ButtonDownload = () => {

  return (
    <a href={CV} download="CV-DanielHollerer" rel='noopener noreferrer' target='_blank'>
      <button>Download CV</button>
    </a>
  )

};

function App() {
  return (
    <div className="App">
      <div className='Name'>
    < h1 > Daniel Hollerer</h1 >
        <p>Personal Portfolio</p>
        <ButtonDownload />
      </div >
    </div >
  );
}

export default App;
