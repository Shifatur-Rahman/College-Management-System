import React, { Component, Fragment } from "react";
import userImg from "../../asset/images/shifatur_novel.jpg";

import { Container, Row, Col, Card, Accordion, Table } from "react-bootstrap";

export default class CourseInfo extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <Container>
            <h1 className='title'>Course Info</h1>
          </Container>
          <Row>
            <Col sm={12} md={6} lg={8} className='courseInfo'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='courseInfoHeader'
                    >
                      Semester-1
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
                    <Accordion.Toggle as={Card.Header} eventKey='1'>
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
                    <Accordion.Toggle as={Card.Header} eventKey='2'>
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
                    <Accordion.Toggle as={Card.Header} eventKey='3'>
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
                    <Accordion.Toggle as={Card.Header} eventKey='5'>
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
                    <Accordion.Toggle as={Card.Header} eventKey='6'>
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
                <img className='userImg' src={userImg} alt='pic' />
                <Table striped bordered hover size='sm'>
                  <tbody>
                    <tr className='table_text'>
                      <td className='table_text'>Name</td>
                      <td className='table_text'>Shifatur Rahman</td>
                    </tr>
                    <tr className='table_text'>
                      <td className='table_text'>Student Id</td>
                      <td className='table_text'>161031042</td>
                    </tr>

                    <tr>
                      <td className='table_text'>Year/ Semester</td>
                      <td className='table_text' colSpan='2'>
                        4/1
                      </td>
                    </tr>
                    <tr>
                      <td className='table_text'>Admitted semester</td>
                      <td className='table_text' colSpan='2'>
                        Fall, 2016
                      </td>
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
