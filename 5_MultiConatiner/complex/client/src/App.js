import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Router, Link } from 'react-router-dom';
import Otherpage from './Otherpage';
import Fib from './Fib';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/"/>
      <Link to="Otherpage">Other page</Link>
       </header>
      <div>
        <Route exact path="/" Compotent={Fib}></Route>
        <Route exact path="/Otherpage" Compotent={Otherpage}></Route>

      </div>
    </div>
    </Router>
  );
}

export default App;
