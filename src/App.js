import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // Get the mode value from localStorage or default to 'light'
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  // Function to update the mode and save it to localStorage
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2f4f4f';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#C1E1D2';
    }
  }

  // Save the mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  useEffect(() => {
    // Set the initial background color based on the mode when the component mounts
    if (mode === 'light') {
      document.body.style.backgroundColor = '#C1E1D2';
    } else {
      document.body.style.backgroundColor = '#2f4f4f';
    }
  }, [mode]);

  return (
    <>
      <Navbar title="TextEmender" about=" | About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Welcome to TextEmender!" mode={mode} />
      </div>
      <div className="container">
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
