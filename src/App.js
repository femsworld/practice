// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



let name = 'Erik  ';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'Dark Mode';
      setInterval(() => {
        document.title = 'Check your device';
      }, 2000);
      setInterval(() => {
        document.title = 'Check your application';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.title = 'Light Mode';
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Switch>
      <Route exact path='/'>
       <Textform heading = 'Text Area' mode={mode}/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
    </Switch>
    </div>
    {/* <Navbar title= 'Practice project' aboutText= 'About Us'/> */}
    </Router>
    </>
  );
}

export default App;
