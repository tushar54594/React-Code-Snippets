//First install React Router dom
npm install react-router-dom

//import the necessary components
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//The Route component is self closing and we need to specify 2 things : path and element

//Example of Navbar

//NAVBAR Component
import { Link } from "react-router-dom";

function Navbar(){
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
};

export default Navbar

//App.js File
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

