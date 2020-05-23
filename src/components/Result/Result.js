import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShowResult from "../ShowResult/ShowResult";
export default class Result extends Component {
  render() {
    return (
      <Fragment>
        <Container className='resultPage'>
          <h1 className='title'>Result</h1>
          <Row>
            <Col>
              <div className='select-box'>
                <fieldser className='field'>
                  <select>
                    <option> Spring 2019</option>
                    <option>Select 1</option>
                    <option>Select 1</option>
                    <option>Select 1</option>
                    <option>Select 1</option>
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
                </fieldser>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
