import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="categories" />
        <Route path="myprofile" />
      </Routes>
    </div>
  );
}

export default App;
