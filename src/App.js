import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Mission from './components/Missions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route className="navlink" path="/" element={<Rocket />} />
        <Route className="navlink" path="missions" element={<Mission />} />
        <Route className="navlink" path="categories" />
        <Route className="navlink" path="myprofile" />
      </Routes>
    </div>
  );
}

export default App;
