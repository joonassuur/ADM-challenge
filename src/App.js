import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components/Index";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
    </Router>
  );
}

export default App;
