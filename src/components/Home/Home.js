import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../asset/css/custom.css";
import logo from "../../asset/images/logo.png";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    var form = document.getElementById("form");
    form = function (e) {
      e.preventDefault();
    };

    return (
      <Fragment>
        <Container className='cover_img p-0' fluid={true}>
          <div>
            <Container fluid={true}>
              <Row>
                <Col lg={8} md={6} sm={12}></Col>
                <Col lg={4} md={6} sm={12} className=' p-0'>
                  <div className='content'>
                    <Container>
                      <br />
                      <br />
                      <h1 className='home_title text-center'>
                        PrimeAsia University
                      </h1>

                      <Row>
                        <Col lg={2} md={3} sm={12}></Col>
                        <Col lg={8} md={6} sm={12}>
                          <img className='logo' src={logo} alt='logo' />
                          <p className='home_subtitle text-center'>
                            A Mission With A Vision
                          </p>

                          <p className='home_text'>
                            Sign in with your PAU id & pass
                          </p>
                          <hr className='home_hr' />

                          <Form id='form'>
                            <Form.Group>
                              <Form.Label className='formText'>
                                User Id
                              </Form.Label>
                              <Form.Control
                                type='text'
                                name='text'
                                placeholder='Enter your user ID'
                                className='formStyle'
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className='formText'>
                                Password
                              </Form.Label>
                              <Form.Control
                                type='password'
                                name='password'
                                placeholder='Enter your password'
                                className='formStyle'
                              />
                            </Form.Group>

                            <NavLink to='/UserHome'>
                              <Button id='btn' variant='success' type='submit'>
                                Sign in
                              </Button>
                            </NavLink>

                            <NavLink to='/Forget' id='forget_password'>
                              Forget Password?
                            </NavLink>
                          </Form>
                        </Col>
                        <Col lg={2} md={3} sm={12}></Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
