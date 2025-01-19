import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App ">
      <Navigation/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
