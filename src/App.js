import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header, Global, Indonesia, Provinsi} from "./component/Pages";



const App = () => {
    return (
      <>
      <Header />
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/Global">Global</Link>
          </li>
          <li>
            <Link to="/Indonesia">Indonesia</Link>
          </li>
          <li>
            <Link to="/Provinsi">Provinsi</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/Global">
            <Global />
          </Route>
          <Route path="/Indonesia">
            <Indonesia />
          </Route>
          <Route path="/Provinsi">
            <Provinsi />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    );
};
export default App;