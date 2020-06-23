import React from "react";
import Home from './components/Home.js';
import Toggle from './Toggle';
import AutoCompleteText from './components/AutoCompleteText';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link class="nav" to="/">Home</Link>
          </li>
          <li>
            <Link class="nav" to="/about">About</Link>
            <Toggle text="dynamic text!"/>
            <AutoCompleteText/>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
