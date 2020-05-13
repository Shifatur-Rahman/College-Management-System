import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdNotifications, MdEmail } from "react-icons/md";
import { TiArrowRightOutline } from "react-icons/ti";
import navImg from "../../asset/images/shifatur_novel.jpg";

import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='m-0 p-0'>
          <Navbar
            fixed='top'
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
          >
            <Navbar.Brand className='navHeading' href='#home'>
              PAU
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'></Nav>
              <Nav>
                <NavLink className='homeLi' to='/UserHome'>
                  Home
                </NavLink>

                <MdNotifications
                  className='homeLi'
                  style={{
                    color: "white",
                    marginTop: "8px",
                  }}
                  size='20px'
                />
                <MdEmail
                  style={{ color: "white", marginTop: "8px" }}
                  className='homeLi'
                  size='20px'
                />

                <TiArrowRightOutline
                  className='homeLi'
                  style={{ color: "white", marginTop: "8px" }}
                  size='20px'
                />

                <img className='nav_img' src={navImg} alt='nav_img' />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Fragment>
    );
  }
}

export default Navigation;
