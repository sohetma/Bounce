import React from 'react';
import './App.css';
import Home from './components/Home.js';
import {Switch, Route} from "react-router-dom";
import Ambassadors from './components/Ambassadors.js';

function App() {
  return (
    <div className="App-Bounce">
      <Switch>
          <Route exact path='/ambassadors' component={Ambassadors} />
      </Switch>

      <header className="App-header">
        <a className="link-Bounce" href="https://bouncetennis.co">
          Bounce
        </a>
        <Home />
      </header>
    </div>
  );
}

export default App;
