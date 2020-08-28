import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </Router>
  );
}

export default App;
