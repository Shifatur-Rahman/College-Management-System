import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Accordion, Card, Button } from "react-bootstrap";

export default class Notice extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className='title'>information</h1>

          <b className='notice_para'>
            1. Payment of Semester Fess for Fall 2019 semester:
          </b>
          <p className='notice_para'>
            It is hereby notified for information of all concerned that the
            Semester Fees for the Fall-2019 Semester of Degree Programs will be
            received through Integrated University Management System (IUMS) from
            the students as per following schedule:
            <br /> <br /> a) 17.02.2020 (Monday) to 10.03.2020 (Tuesday) —
            Without late fee <br /> <br /> b) 11.03.2020 (Wednesday) to
            27.04.2020 (Monday) — With late fee of Tk. 100/-
          </p>
          <Accordion defaultActiveKey='0'>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='0'
                  className='noticeSubTitle'
                >
                  Information
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <p className='notice_para'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className='noticeSubTitle'
                  as={Button}
                  variant='link'
                  eventKey='1'
                >
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <p className='notice_para'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className='noticeSubTitle'
                  as={Button}
                  variant='link'
                  eventKey='2'
                >
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <p className='notice_para'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className='noticeSubTitle'
                  as={Button}
                  variant='link'
                  eventKey='3'
                >
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </Fragment>
    );
  }
}
