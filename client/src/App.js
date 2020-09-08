import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
    </Router>
  );
}

export default App;
