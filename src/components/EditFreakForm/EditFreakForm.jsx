import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function EditFreakForm() {
  return (
    <Form className=" mx-2 p-3">
      <Form.Group className="mb-3">
        <Form.Label>Your name</Form.Label>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={ 3 } />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select>
          <option>Founder</option>
          <option>Frontend Dev</option>
          <option>Backend Dev</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Level</Form.Label>
        <Form.Select>
          <option>Master</option>
          <option>Expert</option>
          <option>Proficient</option>
          <option>Competent</option>
          <option>Advanced</option>
          <option>Novice</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Norm</Form.Label>
        <Form.Select>
          <option>Full time</option>
          <option>Part time</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Skills</Form.Label>
        <Form.Text className="text-muted">
          <br />
          Example (Elm, JS, Swift...)
        </Form.Text>
        <Form.Control as="textarea" rows={ 3 } />
      </Form.Group>
    </Form>
  );
}

export default EditFreakForm;
