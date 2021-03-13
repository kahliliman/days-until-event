import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../../pages"


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
