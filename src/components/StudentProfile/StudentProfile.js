import React, { Component, Fragment } from "react";
import { Container, Tabs, Tab, Row, Col, Table } from "react-bootstrap";
import stdImg from "../../asset/images/shifatur_novel.jpg";

export default class StudentProfile extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <Container>
            <h1 className='title'>Student Profile</h1>
          </Container>

          <Row>
            <Col sm={12} md={12} lg={8}>
              <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
                <Tab eventKey='profile ' title='Personal'>
                  <Table striped bordered hover size='sm'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey='profile' title='Academic'>
                  <Table
                    striped
                    bordered
                    hover
                    size='sm'
                    className='studentProfileMargin'
                  >
                    <tbody>
                      <tr>
                        <td>Full Name</td>
                        <td className='borderP'>Md. Zunaid Ali</td>
                      </tr>
                      <tr>
                        <td>First Name * </td>
                        <td>Md</td>
                      </tr>
                      <tr>
                        <td> Last Name * </td>
                        <td>Zunaid Ali</td>
                      </tr>
                      <tr>
                        <td> Father Name * </td>
                        <td> Md. Mukhlesur Rahman</td>
                      </tr>
                      <tr>
                        <td> Mother Name * </td>
                        <td> Ayesa Khatun</td>
                      </tr>
                      <tr>
                        <td> Birth Date * </td>
                        <td> 15/06/1995</td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey='Guardian' title='Guardian'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
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
                </Tab>
                <Tab eventKey='Contact' title='Contact'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
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
                </Tab>
              </Tabs>
            </Col>
            <Col sm={12} md={12} lg={4}>
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
