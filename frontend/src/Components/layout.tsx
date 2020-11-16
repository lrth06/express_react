import React from "react";
import "../scss/layout.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Layout() {
  return (
    <nav>
      '
      <Router>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </Router>
    </nav>
  );
}
