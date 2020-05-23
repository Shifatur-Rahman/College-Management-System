import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import Fieldset, { withFieldset, Field, withFullName } from "react-fieldset";

export default class Library extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className='title'>Library</h1>
          <Row>
            <Col sm={8} md={6} lg={6}>
              <Fieldset>
                <legend>Serach-here</legend>

                <Form>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                  />
                </Form>
              </Fieldset>

              <Form>
                <fieldset>
                  <Form.Group as={Row}>
                    <Col className='radioBtn'>
                      <a>
                        <input
                          type='radio'
                          id='one'
                          name='formHorizontalRadios'
                          id='formHorizontalRadios1'
                        />
                        <label for='one'> Subject </label>{" "}
                      </a>
                      <a className='radioBtnStyle'>
                        <input
                          type='radio'
                          id='one'
                          name='formHorizontalRadios'
                          id='formHorizontalRadios1'
                        />
                        <label for='one'> Title </label>
                      </a>
                      <a className='radioBtnStyle'>
                        <input
                          type='radio'
                          id='one'
                          name='formHorizontalRadios'
                          id='formHorizontalRadios1'
                        />
                        <label for='one'> Author </label>
                      </a>

                      <a className='radioBtnStyle'>
                        <input
                          // style={{ marginLeft: "30px" }}
                          type='radio'
                          id='one'
                          name='formHorizontalRadios'
                          id='formHorizontalRadios1'
                        />
                        <label for='one'> Any </label>
                      </a>
                    </Col>
                  </Form.Group>
                </fieldset>

                <Form.Group as={Row}>
                  <Col>
                    <Button variant='success' active>
                      Search
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <br />
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <td style={{ textAlign: "center" }} colSpan='5'>
                      Total 4961 records found
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#</td>
                    <td>Category</td>
                    <td>Title</td>
                    <td>Call No</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Book</td>
                    <td>1001 JAVA programmer's tips</td>
                    <td>005.133/C454o</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Python</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Algorithm part-1</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Programming in C</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Book</td>
                    <td>Javascript</td>
                    <td>428.1/R943o</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
