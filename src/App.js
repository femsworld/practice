// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

let name = 'Erik  ';
function App() {
  return (
    <>
    {/* <Navbar title= 'Practice project' aboutText= 'About Us'/> */}
    <Navbar/>
    {/* <Textform heading = 'Text Area'/> */}
    <About/>
    </>
  );
}

export default App;
