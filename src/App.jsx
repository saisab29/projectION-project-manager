import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth login />} />
          <Route path="/account" element={<h1>Account</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
