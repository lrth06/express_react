import React from "react";
import { Layout } from "./Components/layout";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Layout />
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={About} />
        <Route path="/" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
