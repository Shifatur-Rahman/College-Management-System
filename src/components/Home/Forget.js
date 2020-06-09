import React, { Fragment, Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../asset/images/logo.png";

class Forget extends Component {
  render() {
    return (
      <Fragment>
        <Container className='cover_img p-0' fluid={true}>
          <div>
            <Container fluid={true}>
              <Row>
                <Col lg={7} md={6} sm={12}></Col>
                <Col lg={5} md={6} sm={12} className=' p-0'>
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

                          <p className='home_text'>Forgot password?</p>

                          <hr className='home_hr' />
                          <p className='forget_text'>
                            Please enter your <a href='#ddd'>PAU User ID.</a>{" "}
                            Password reset instruction will be sent to you
                            email.
                          </p>

                          <Form id='form'>
                            <Form.Group>
                              <Form.Control
                                type='text'
                                name='text'
                                placeholder='Enter your user ID'
                                className='formStyle'
                              />
                            </Form.Group>

                            <NavLink to='/'>
                              <Button id='btn' variant='success' type='submit'>
                                Submit
                              </Button>
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

export default Forget;
