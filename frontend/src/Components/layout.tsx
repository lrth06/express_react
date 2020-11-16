import React from "react";
import "../scss/layout.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Layout() {
  return (
    <nav>
      '
      <Router>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </Router>
    </nav>
  );
}
