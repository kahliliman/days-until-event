import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../../components/privateRoute";
import { HomePage, LoginPage } from "../../pages"


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
