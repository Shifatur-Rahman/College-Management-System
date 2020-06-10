import React, { Component, Fragment } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { IoMdArrowRoundDown } from "react-icons/io";

export default class ClassRoutine extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className='title'>Class Routine</h1>
          <Row>
            <Col>
              <Container className='routine'>
                <Table striped bordered hover size='sm'>
                  <thead className='routineTitle'>
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
                  <Button
                    className='RoutineBtn'
                    as='input'
                    type='submit'
                    value='Download pdf'
                  />
                </Table>
              </Container>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
