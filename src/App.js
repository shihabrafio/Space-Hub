import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route className="navlink" path="/" />
        <Route className="navlink" path="categories" />
        <Route className="navlink" path="myprofile" />
      </Routes>
    </div>
  );
}

export default App;
