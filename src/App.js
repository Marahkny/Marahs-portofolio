import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Work from './work';
import About from './about';
import Techcity from './tech/teachcity'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Se till att denna rad finns


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/techcity" element={<Techcity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;