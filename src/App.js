import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Parent from './component/Parent'
import Counter from './component/Counter'
import Register from './component/Register'
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/parent">Parent</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/parent">
            <Parent />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
