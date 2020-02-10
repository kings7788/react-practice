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
import Card from './component/Card/Card'
import lesson from './component/Card/lesson-react.json'
import lesson2 from './component/Card/lesson-react.json'
import Map from './component/ArrayＭap/List'
import Map2 from './component/ObjectMap/List'

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
          <ul>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/map2">Map2</Link>
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
          <Route path="/card">
            <Card data={lesson} />
            <Card data={lesson2} />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/map2">
            <Map2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
