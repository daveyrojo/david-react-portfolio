import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Footer from ".components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
        <Home />
      <Footer />
    </Router>
  );
}

export default App;
