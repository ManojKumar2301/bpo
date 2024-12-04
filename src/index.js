import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your App component
import "./styles/global.css"; // Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router> {/* Wrap App component inside BrowserRouter */}
    <App />
  </Router>
);
