import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navBar.js";
import Footer from "./components/footer.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Service from "./pages/service.js";
import Contact from "./pages/contact.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
