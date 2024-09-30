import React from "react";
import "./App.css";
import PropertyList from "./components/PropertyList";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {/* Route for Property Listings (Home) */}
          <Route path="/" exact>
            <PropertyList />
          </Route>

          {/* Route for User Registration */}
          <Route path="/register">
            <Register />
          </Route>

          {/* Route for User Login */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
