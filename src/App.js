import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Images from "./images.json"
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <NavBar />
        <Home /> 
        <AboutMe images={Images} />
      <Footer />
    </Router>
  );
}

export default App;
