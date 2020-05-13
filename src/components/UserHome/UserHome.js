import React, { Fragment } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import userImg from "../../asset/images/shifatur_novel.jpg";

export default function UserHome() {
  return (
    <Fragment>
      <h1 className='title'> User Home</h1>
      <Container fluid={true} className='userHome'>
        <Row>
          <Col sm={12} md={6} lg={2}></Col>
          <Col sm={12} md={12} lg={8}>
            <div className='userHome_div'>
              <img className='userImg' src={userImg} alt='pic' />
              <Table striped bordered hover size='sm'>
                <tbody>
                  <tr className='table_text'>
                    <td className='table_text'>Name</td>
                    <td className='table_text'>Shifatur Rahman</td>
                  </tr>
                  <tr>
                    <td className='table_text'>Student Id</td>
                    <td className='table_text'>161031042</td>
                  </tr>
                  <tr>
                    <td className='table_text'>Dept./school</td>
                    <td className='table_text'>
                      Computer Science & Engineering
                    </td>
                  </tr>
                  <tr>
                    <td className='table_text'>Year/ Semester</td>
                    <td className='table_text'>4/1</td>
                  </tr>
                  <tr>
                    <td className='table_text'>Admitted semester</td>
                    <td className='table_text'>Fall, 2016</td>
                  </tr>
                  <tr>
                    <td className='table_text'>Current enrollment status</td>
                    <td className='table_text'>TEMPORARY</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col sm={12} md={6} lg={2}></Col>
        </Row>
      </Container>
    </Fragment>
  );
}
