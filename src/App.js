import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from './App.module.css'
import Parent from './component/Parent'
import Counter from './component/Counter'
import Register from './component/Register/Register'
import Card from './component/Card/Card'
import lesson from './component/Card/lesson-react.json'
import lesson2 from './component/Card/lesson-react.json'
import Map from './component/ArrayＭap/List'
import Map2 from './component/ObjectMap/List'
import FileNode from './component/FolderTree/FileNode'
import files from './component/FolderTree/files.json'
import BasicFormControl from './component/Form/BasicForm'
import NumericFormControl from './component/Form/NumericForm'
import SelectFormControl from './component/Form/SelectForm'
import Salary from './component/Homework_Salary'
import ChatRoom from './component/Hw_Chat/Chat_Room'
import InifiniteScroll from './component/Implement/InfiniteScroll'
import HooksCount from './component/Hooks/HooksCount'
import HooksTodo from './component/HooksTodo/TodoList'
import FetchUseEffect from './component/HooksUseEffect/FetchUseEffect'
// import ProductApp from './component/ContextApi/ProductApp'
import WeatherApp from './component/Weather/WeatherApp';

import './component/Weather/styles.css';
function App() {
  return (
    <Router>
      <div>
        <nav className={style.nav}>
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
          <ul>
            <li>
              <Link to="/tree">FolderTree</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/form1">basic form </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/form2">numeric form </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/form3">select form </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hw1">salary </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hw2">chatroom </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hw3">lesson list </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hooks1">hooks count </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/todolist">hooks Todo </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hooksEffect">hooks useEffect </Link>
            </li>
          </ul>
          {/* <ul>
            <li>
              <Link to="/contextApi">Context api </Link>
            </li>
          </ul> */}
          <ul>
            <li>
              <Link to="/weather">Weather </Link>
            </li>
          </ul>
        </nav>
        <div className={style.container}>
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
            <Route path="/tree">
              <FileNode {...files}/>
            </Route>
            <Route path="/form1">
              <BasicFormControl />
            </Route>
            <Route path="/form2">
              <NumericFormControl />
            </Route>
            <Route path="/form3">
              <SelectFormControl />
            </Route>
            <Route path="/hw1">
              <Salary />
            </Route>
            <Route path="/hw2">
              <ChatRoom />
            </Route>
            <Route path="/hw3">
              <InifiniteScroll />
            </Route>
            <Route path="/hooks1">
              <HooksCount />
            </Route>
            <Route path="/todolist">
              <HooksTodo />
            </Route>
            <Route path="/hooksEffect">
              <FetchUseEffect />
            </Route>
            {/* <Route path="/contextApi">
              <ProductApp />
            </Route> */}
            <Route path="/weather">
              <WeatherApp />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
