import React, { Component, Fragment } from "react";
import CourseInfo from "../../components/CourseInfo/CourseInfo";
import NavbarPage from "../NavbarPage/NavbarPage";

export default class CourseInfoPage extends Component {
  render() {
    return (
      <Fragment>
        <NavbarPage />
        <CourseInfo />
      </Fragment>
    );
  }
}
