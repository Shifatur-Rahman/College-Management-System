import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import UserHome from "../../components/UserHome/UserHome";
import NoticePage from "../NoticePage/NoticePage";
import StudentProfile from "../../components/StudentProfile/StudentProfile";
import ClassRoutine from "../../components/ClassRoutine/ClassRoutine";
import Navigation from "../../components/Navigation/Navigation";
import CourseInfo from "../../components/CourseInfo/CourseInfo";

import { Navbar } from "react-bootstrap";

const routes = [
  {
    path: "/UserHome",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <UserHome />,
  },
  {
    path: "/NoticePage",
    sidebar: () => <div></div>,
    main: () => <NoticePage />,
  },
  {
    path: "/StudentProfilePage",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <StudentProfile />,
  },
  {
    path: "/Routine",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <ClassRoutine />,
  },
  {
    path: "/CourseInfo",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <CourseInfo />,
  },
];

class NavbarPage extends React.Component {
  render() {
    return (
      <Router>
        <Navigation fluid={true} />

        <div className='side_menu' style={{ display: "flex", height: "100vh" }}>
          <div
            className='sidebar_menu'
            // style={{
            //   padding: "10px",
            //   width: "300px",
            // }}
          >
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            {/* <Navbar.Collapse id='responsive-navbar-nav'> */}
            <ul
              className='sidebarUl'
              // style={{ listStyleType: "none", padding: 0 }}
            >
              <NavLink to='/UserHome'>
                <a href='#ee' className='bm-item'>
                  Home
                </a>
              </NavLink>
              <hr className='hr_margin' />

              <NavLink to='/NoticePage'>
                <a href='#ee' className='bm-item'>
                  NoticePage
                </a>
              </NavLink>
              <hr />
              <NavLink to='/StudentProfilePage'>
                <a href='#ee' className='bm-item'>
                  Student Profile
                </a>
              </NavLink>
              <hr />
              <NavLink to='/Routine'>
                <a href='#ee' className='bm-item'>
                  Class Routine
                </a>
              </NavLink>
              <hr />
              <NavLink to='/CourseInfo'>
                <a href='#ee' className='bm-item'>
                  Course Info
                </a>
              </NavLink>
              <hr />
              <NavLink to='/CourseInfo'>
                <a href='#ee' className='bm-item'>
                  Result
                </a>
              </NavLink>
              <hr />
              <NavLink to='/CourseInfo'>
                <a href='#ee' className='bm-item'>
                  Library
                </a>
              </NavLink>
              <hr />
              <NavLink to='/CourseInfo'>
                <a href='#ee' className='bm-item'>
                  Certificate
                </a>
              </NavLink>
            </ul>
            {/* </Navbar.Collapse> */}
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.UserHome}
                  exact={route.UserHome}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default NavbarPage;
