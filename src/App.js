import React from "react";
import "./App.css";
import PropertyList from "./components/PropertyList";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Real Estate Platform
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
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
        </Container>
      </div>
    </Router>
  );
}

export default App;
