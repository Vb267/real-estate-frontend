import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import AppNavbar from "./components/Navbar"; // Correct the import name if necessary
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
