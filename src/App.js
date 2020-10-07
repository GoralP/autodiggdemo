import React from "react";
import Home from "./view/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
