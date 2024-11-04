import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Work from './work';
import About from './about';
import Techcity from './tech/teachcity';
import Klimat from './Klimatkoll/klimat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> {/* Lägg till denna för att hantera scroll till toppen */}
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/klimat" element={<Klimat />} />
          <Route path="/techcity" element={<Techcity />} />
        </Routes>
      </Router>
     

    </div>
  );
}

export default App;
