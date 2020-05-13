import React, { Component, Fragment } from "react";
import NavbarPage from "../NavbarPage/NavbarPage";
import ClassRoutine from "../../components/ClassRoutine/ClassRoutine";

export default class ClassRoutinePage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarPage />
        <ClassRoutine />
      </Fragment>
    );
  }
}
