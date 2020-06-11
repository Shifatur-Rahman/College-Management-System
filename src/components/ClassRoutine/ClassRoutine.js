import React, { Component, Fragment } from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { IoMdArrowRoundDown } from "react-icons/io";

export default class ClassRoutine extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className='title'>Class Routine</h1>

          {/* <Table striped bordered hover responsive='sm'>
            <thead className='routineTime'>
              <tr>
                <th>
                  Time <FiArrowRight /> <br /> Date <IoMdArrowRoundDown />
                </th>
                <th>08:00 AM - 08:50 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
                <th>08:50 AM - 09:40 AM</th>
              </tr>
            </thead>
            <tbody className='routineTime'>
              <tr>
                <td>Sunday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Monday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td></td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table> */}
          <Row>
            <Col className='classRoutine'>
              <Card>
                <Card.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan='2'>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>

                <Button>Download</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
