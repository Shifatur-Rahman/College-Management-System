import React, { Component, Fragment } from "react";
import stdImg from "../../asset/images/shifatur_novel.jpg";

import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Table,
} from "react-bootstrap";

export default class CourseInfo extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <h1 className='title'>Course Info</h1>
          <Row>
            <Col sm={12} md={6} lg={8}>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                      Semester- 1
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                      Semester-2
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                      Semester-3
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                      Semester-4
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='3'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='5'>
                      Semester-5
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='5'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='6'>
                      Semester-6
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey='6'>
                    <Card.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Course Credit</th>
                            <th>Course Teacher</th>
                            <th>Course result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Physcis</td>
                            <td>phy-101</td>
                            <td>3</td>
                            <td>Mumtahina Naznin</td>
                            <td>Incomplete</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                          <tr>
                            <td>Basic English</td>
                            <td>Eng-101</td>
                            <td>3</td>
                            <td>Moshiur Rahman</td>
                            <td>Passed</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <div>
                <img className='stdImg' src={stdImg} alt='img' />
                <Table striped bordered hover size='sm'>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Shifatur Rahman</td>
                    </tr>
                    <tr>
                      <td>Student Id</td>
                      <td>161031042</td>
                    </tr>
                    <tr>
                      <td>Dept./school</td>
                      <td colSpan='2'>Computer Science & Engineering</td>
                    </tr>
                    <tr>
                      <td>Year/ Semester</td>
                      <td colSpan='2'>4/1</td>
                    </tr>
                    <tr>
                      <td>Admitted semester</td>
                      <td colSpan='2'>Fall, 2016</td>
                    </tr>
                    <tr>
                      <td>Current enrollment status</td>
                      <td colSpan='2'>TEMPORARY</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
