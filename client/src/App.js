import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navigation from "./components/Navbar";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
