import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FreakModelDefault, FreakModelKeys } from '../../models/freaks';

function EditFreakForm({ freak, onChange }) {
  function triggerChange(name) {
    return ({ target: { value } }) => {
      const newFreak = { ...freak, [name]: value };
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
              onChange={ triggerChange(FreakModelKeys.firstName) }
            />
          </Col>
          <Col>
            <Form.Control
              required
              data-testid="last-name-input"
              placeholder="Last name"
              value={ freak.lastName }
              onChange={ triggerChange(FreakModelKeys.lastName) }
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control
          required
          data-testid="email-input"
          type="email"
          placeholder="Enter email"
          value={ freak.email }
          onChange={ triggerChange(FreakModelKeys.email) }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          data-testid="description-input"
          rows={ 3 }
          value={ freak.description }
          onChange={ triggerChange(FreakModelKeys.description) }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role*</Form.Label>
        <Form.Select
          required
          data-testid="role-input"
          value={ freak.role }
          onChange={ triggerChange(FreakModelKeys.role) }
        >
          <option data-testid="role-option" value="">Pick One</option>
          <option data-testid="role-option" value="Founder">Founder</option>
          <option data-testid="role-option" value="Developer">Developer</option>
          <option data-testid="role-option" value="QA">QA</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Level*</Form.Label>
        <Form.Select
          required
          data-testid="level-input"
          value={ freak.level }
          onChange={ triggerChange(FreakModelKeys.level) }
        >
          <option data-testid="level-option" value="">Pick One</option>
          <option data-testid="level-option" value="Master">Master</option>
          <option data-testid="level-option" value="Expert">Expert</option>
          <option data-testid="level-option" value="Proficient">Proficient</option>
          <option data-testid="level-option" value="Competent">Competent</option>
          <option data-testid="level-option" value="Advanced">Advanced</option>
          <option data-testid="level-option" value="novice">Novice</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Norm*</Form.Label>
        <Form.Select
          required
          data-testid="norm-input"
          value={ freak.norm }
          onChange={ triggerChange(FreakModelKeys.norm) }
        >
          <option data-testid="norm-option" value="">Pick One</option>
          <option data-testid="norm-option" value="Full time">Full time</option>
          <option data-testid="norm-option" value="Part time">Part time</option>
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
          data-testid="skills-input"
          rows={ 3 }
          value={ freak.skills }
          onChange={ triggerChange(FreakModelKeys.skills) }
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
