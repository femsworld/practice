// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

let name = 'Erik  ';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    {/* <Navbar title= 'Practice project' aboutText= 'About Us'/> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Textform heading = 'Text Area' mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
