import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.scss';
import Home from '../components/Home/Home';
import Works from '../components/Works/Works';
import Single from '../components/Works/Single';
import AboutMe from '../components/About/AboutMe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Single />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;