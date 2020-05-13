import React, { Component, Fragment } from "react";
import UserHome from "../../components/UserHome/UserHome";
import NavbarPage from "../NavbarPage/NavbarPage";

export default class UserHomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarPage />
        <UserHome />
      </Fragment>
    );
  }
}
