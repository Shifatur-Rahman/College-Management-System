import React, { Component, Fragment } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default class ShowResult extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <h1 className='title'>View Result</h1>
          <Row>
            <Col
              className='tableFont'
              md={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              sm={{ span: 12, offset: 12 }}
            >
              <Table striped bordered hover size='sm'>
                <tbody>
                  <tr>
                    <td className='borderP'>Student Name</td>
                    <td className='borderP'>Md. Zunaid Ali </td>
                  </tr>
                  <tr>
                    <td className='borderP'>Registration Number </td>
                    <td className='borderP'>160205157</td>
                  </tr>
                  <tr>
                    <td className='borderP'>Program</td>
                    <td className='borderP'>
                      Bachelor of Science in Electrical and Electronic
                      Engineering
                    </td>
                  </tr>
                  <tr>
                    <td className='borderP'>Department/School</td>
                    <td className='borderP'>
                      Department of Electrical and Electronic Engineering
                    </td>
                  </tr>
                </tbody>
              </Table>
              <br />
              <Table bordered>
                <thead>
                  <tr>
                    <th colSpan='4'>
                      Result of Semester Final/ Improvement/ Clearance
                      Examinations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Year</td>
                    <td>3</td>
                    <td>Semester Credit Completed</td>
                    <td> 22.5</td>
                  </tr>
                  <tr>
                    <td>Semester</td>
                    <td>2</td>
                    <td>Grade Point Average (GPA)</td>
                    <td> 2.667</td>
                  </tr>
                  <tr>
                    <td>Entrollment Semester</td>
                    <td>Fall, 2016</td>
                    <td>Cumulative Credit Completed</td>
                    <td>118.5</td>
                  </tr>
                  <tr>
                    <td>Medium of Instruction</td>
                    <td>English</td>
                    <td>Cumulative Grade Point Average (CGPA)</td>
                    <td>2.617</td>
                  </tr>
                </tbody>
              </Table>
              <br />

              <Table striped bordered hover>
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <td>Course Number</td>
                    <td>Course Title</td>
                    <td>Course Credit</td>
                    <td colSpan='2'>Final</td>
                    <td colSpan='2'>Improvement/Clearance</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Letter Grade</td>
                    <td>Grade Point</td>
                    <td>Letter Grade</td>
                    <td> Grade Point</td>
                  </tr>
                  <tr>
                    <td>EEE 2203</td>
                    <td>Electronics II </td>
                    <td>3</td>
                    <td>C</td>
                    <td>2.25</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>EEE 2203</td>
                    <td>Electronics II </td>
                    <td>3</td>
                    <td>C</td>
                    <td>2.25</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>EEE 2203</td>
                    <td>Electronics II </td>
                    <td>3</td>
                    <td>C</td>
                    <td>2.25</td>
                    <td>F</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>EEE 2203</td>
                    <td>Electronics II </td>
                    <td>3</td>
                    <td>C</td>
                    <td>2.25</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>EEE 2203</td>
                    <td>Electronics II </td>
                    <td>3</td>
                    <td>C</td>
                    <td>2.25</td>
                    <td></td>
                    <td></td>
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
