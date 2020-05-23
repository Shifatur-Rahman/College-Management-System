import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ForgetPage from "../pages/ForgetPage/ForgetPage";
import NavbarPage from "../pages/NavbarPage/NavbarPage";
import ShowResult from "../components/ShowResult/ShowResult";

export default class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Forget' component={ForgetPage} />
          <NavbarPage />
        </Switch>
      </Fragment>
    );
  }
}
