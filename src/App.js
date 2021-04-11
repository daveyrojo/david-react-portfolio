import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";



function App() {
  return (
    <Router>
      <NavBar />
        <AboutMe />
      <Footer />
    </Router>
  );
}

export default App;
