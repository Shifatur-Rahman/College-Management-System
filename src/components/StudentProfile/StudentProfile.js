import React, { Component, Fragment } from "react";
import { Container, Tabs, Tab, Row, Col, Table, Button } from "react-bootstrap";
import userImg from "../../asset/images/shifatur_novel.jpg";

export default class StudentProfile extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
          <h1 className='title'>Student Profile</h1>

          <Row>
            <Col sm={12} md={12} lg={8}>
              <Tabs
                className='studentProfile'
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
              >
                <Tab eventKey='profile ' title='Personal'>
                  <Table
                    striped
                    bordered
                    hover
                    size='sm'
                    className='studentProfileMargin'
                  >
                    <tbody className='firstPersonal'>
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
                <Tab eventKey='profile' title='Academic'>
                  <Table className='studentProfileMargin'>
                    <tbody>
                      <tr>
                        <th className='personalContactTitle'>Mobile Number</th>
                        <input
                          type='text'
                          placeholder=' 01921601608'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Phone Number</th>
                        <input
                          type='text'
                          placeholder=' Phone No.'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Email</th>
                        <input
                          type='text'
                          placeholder=' alizunaid2711@gmail.com'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>
                          Present Address
                        </th>
                        <input
                          type='text'
                          placeholder='Modhubag,Mogbazar, Dhaka'
                          className='form-control personalContactMargin'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>
                          Permanent Address
                        </th>
                        <input
                          type='text'
                          placeholder=' Village : Basharuk, P.S : Nabinagar, District : Brahmanbaria'
                          className='form-control personalContactMargin'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey='Guardian' title='Guardian'>
                  <Table size='lg' className='studentProfileMargin'>
                    <tbody>
                      <tr>
                        <th className='personalContactTitle'>Guardian Name</th>
                        <input
                          type='text'
                          placeholder='Amena Begum'
                          className='form-control guardianContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Guardian Phone</th>
                        <input
                          type='text'
                          placeholder='01918848453'
                          className='form-control guardianContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>
                          Guardian Mobile
                        </th>
                        <input
                          type='text'
                          placeholder='01918848453'
                          className='form-control guardianContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Guardian Email</th>
                        <input
                          type='text'
                          placeholder=' Email'
                          className='form-control guardianContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                          disabled
                        ></input>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>

                <Tab eventKey='Contact' title='Contact'>
                  <Table className='studentProfileMargin'>
                    <tbody>
                      <tr>
                        <th className='personalContactTitle'>Mobile Number</th>
                        <input
                          type='text'
                          placeholder=' 01921601608'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Phone Number</th>
                        <input
                          type='text'
                          placeholder=' Phone No.'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>Email</th>
                        <input
                          type='text'
                          placeholder=' alizunaid2711@gmail.com'
                          className='form-control personalContact'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>
                          Present Address
                        </th>
                        <input
                          type='text'
                          placeholder='Modhubag,Mogbazar, Dhaka'
                          className='form-control personalContactMargin'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                      <tr>
                        <th className='personalContactTitle'>
                          Permanent Address
                        </th>
                        <input
                          type='text'
                          placeholder=' Village : Basharuk, P.S : Nabinagar, District : Brahmanbaria'
                          className='form-control personalContactMargin'
                          data-ng-disabled='!editProfileMode'
                          disabled='disabled'
                        ></input>
                      </tr>
                    </tbody>
                  </Table>
                  <Button className='routinebtn' variant='secondary'>
                    Edit
                  </Button>
                </Tab>
              </Tabs>
            </Col>

            <Col sm={12} md={12} lg={4}>
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
