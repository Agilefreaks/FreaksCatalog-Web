import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FreakModelKeys = {
  firstName: 'firstName',
  lastName: 'lastname',
  email: 'email',
  description: 'description',
  role: 'role',
  level: 'level',
  norm: 'norm',
  skills: 'skills',
};

function EditFreakForm() {
  const [ values, setValues ] = useState({
    [FreakModelKeys.firstName]: '',
    [FreakModelKeys.lastName]: '',
    [FreakModelKeys.email]: '',
    [FreakModelKeys.description]: '',
    [FreakModelKeys.role]: '',
    [FreakModelKeys.level]: '',
    [FreakModelKeys.norm]: '',
    [FreakModelKeys.skills]: '',
  });

  const set = (name) => ({ target: { value } }) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  };

  return (
    <Form className=" mx-2 p-3">
      <Form.Group className="mb-3">
        <Form.Label>Your name</Form.Label>
        <Row>
          <Col>
            <Form.Control placeholder="First name" value={ values.firstName } onChange={ set(FreakModelKeys.firstName) } />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" value={ values.lastName } onChange={ set(FreakModelKeys.lastName) } />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={ values.email } onChange={ set(FreakModelKeys.email) } />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={ 3 } value={ values.description } onChange={ set(FreakModelKeys.description) } />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select value={ values.role } onChange={ set(FreakModelKeys.role) }>
          <option>Founder</option>
          <option>Frontend Dev</option>
          <option>Backend Dev</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Level</Form.Label>
        <Form.Select value={ values.level } onChange={ set(FreakModelKeys.level) }>
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
        <Form.Select value={ values.norm } onChange={ set(FreakModelKeys.norm) }>
          <option>Full time</option>
          <option>Part time</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Skills</Form.Label>
        <Form.Text className="text-muted">
          <br />
          Example (Elm, JS, Swift...)
        </Form.Text>
        <Form.Control as="textarea" rows={ 3 } value={ values.skills } onChange={ set(FreakModelKeys.skills) } />
      </Form.Group>
    </Form>
  );
}

export default EditFreakForm;
