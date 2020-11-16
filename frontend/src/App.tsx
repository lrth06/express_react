import React from "react";
import { Layout } from "./Components/layout";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
     
      <Router>
         <Layout />
        <Switch>
          <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
