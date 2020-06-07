import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Result extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className='title'>Result</h1>
          <Row>
            <Col>
              <div className='select-box'>
                <select>
                  <option className='resultOption'>Spring-16</option>
                  <option className='resultOption'>Fall-16</option>
                  <option className='resultOption'>Spring-17</option>
                  <option className='resultOption'>Fall-17</option>
                  <option className='resultOption'>Spring-18</option>
                </select>

                <NavLink to='/ShowResult'>
                  <Button
                    className='result-button'
                    variant='success'
                    type='submit'
                  >
                    Show Result
                  </Button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
