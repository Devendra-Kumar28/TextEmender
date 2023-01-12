import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode , setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2f4f4f';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#C1E1D2';
    }
  }

  return (
    <>

      <Navbar title = "TextEmender" about="| About" mode={mode} toggleMode = {toggleMode} />
      <div className="container my-3">
        <TextForm heading="Please enter your text below to emend." mode={mode} />
      </div>
      <div className="container">
        <About mode={mode} />
      </div>
    </>

  );
}

export default App;
