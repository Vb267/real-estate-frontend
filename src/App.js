import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CategoryListings from "./components/CategoryListings"; // Importing the new component for category listings
import AppNavbar from "./components/Navbar"; // Corrected the import name to match AppNavbar
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <AppNavbar /> {/* The navbar will now show dynamic categories */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Register route */}
          <Route
            path="/category/:categoryId"
            element={<CategoryListings />}
          />{" "}
          {/* Dynamic route for category-based listings */}
          <Route path="*" element={<NotFound />} />{" "}
          {/* Fallback route for undefined paths */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
