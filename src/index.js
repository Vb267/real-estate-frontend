import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Home from "./pages/Home"; // Create Home page component
import Login from "./pages/Login"; // Create Login page component
import Signup from "./pages/Signup"; // Create Signup page component
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // If you have custom styles

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
