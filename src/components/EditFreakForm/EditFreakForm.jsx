import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FreakModelDefault, FreakModelKeys } from '../../models/freaks';

function EditFreakForm({ freak, onChange }) {
  function set(name) {
    return ({ target: { value } }) => {
      const newFreak = ({ ...freak, [name]: value });
      onChange(newFreak);
    };
  }

  return (
    <Form className=" mx-2 p-3">
      <Form.Group className="mb-3">
        <Form.Label>Your name*</Form.Label>
        <Row>
          <Col>
            <Form.Control
              required
              data-testid="first-name-input"
              placeholder="First name"
              value={ freak.firstName }
              onChange={ set(FreakModelKeys.firstName) }
            />
          </Col>
          <Col>
            <Form.Control
              required
              data-testid="last-name-input"
              placeholder="Last name"
              value={ freak.lastName }
              onChange={ set(FreakModelKeys.lastName) }
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={ freak.email }
          onChange={ set(FreakModelKeys.email) }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={ 3 }
          value={ freak.description }
          onChange={ set(FreakModelKeys.description) }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role*</Form.Label>
        <Form.Select
          required
          value={ freak.role }
          onChange={ set(FreakModelKeys.role) }
        >
          <option>Founder</option>
          <option>Frontend Dev</option>
          <option>Backend Dev</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Level*</Form.Label>
        <Form.Select
          required
          value={ freak.level }
          onChange={ set(FreakModelKeys.level) }
        >
          <option>Master</option>
          <option>Expert</option>
          <option>Proficient</option>
          <option>Competent</option>
          <option>Advanced</option>
          <option>Novice</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Norm*</Form.Label>
        <Form.Select
          required
          value={ freak.norm }
          onChange={ set(FreakModelKeys.norm) }
        >
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
        <Form.Control
          as="textarea"
          rows={ 3 }
          value={ freak.skills }
          onChange={ set(FreakModelKeys.skills) }
        />
      </Form.Group>
    </Form>
  );
}

EditFreakForm.propTypes = {
  freak: PropTypes.shape(FreakModelDefault),
  onChange: PropTypes.func.isRequired,
};

EditFreakForm.defaultProps = {
  freak: FreakModelDefault,
};

export default EditFreakForm;
