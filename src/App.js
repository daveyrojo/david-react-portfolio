import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Images from "./images.json"
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
// import ModalCard from "./components/ModalCard";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route to="/" exact path>
          <Home />
        </Route>
        <Route to="/aboutme" exact path>
          <AboutMe images={Images} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
