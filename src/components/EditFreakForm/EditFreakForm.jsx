import React from 'react';
import Select from 'react-select';
import { Form, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { FreakModelDefault, FreakModelKeys, FreakModelProps } from '../../models/freak';
import FreaksQueries from '../../graphql/queries/freaks';

function mapTechnology(technology) {
  return {
    value: technology.id,
    label: technology.name,
  };
}

function unmapTechnology(technology) {
  return {
    id: technology.value,
    name: technology.label,
  };
}

function EditFreakForm({ freak, onChange, onSubmit }) {
  const { loading, error, data } = useQuery(FreaksQueries.getAll());

  console.log(33333333333, data);

  function triggerChange(name) {
    return ({ target: { value } }) => {
      const newFreak = { ...freak, [name]: value };
      onChange(newFreak);
    };
  }

  function triggerObjectChange(name) {
    return ({ target: { value } }) => {
      const newFreak = { ...freak, [name]: { name: value } };
      onChange(newFreak);
    };
  }

  function handleSelectChange(name) {
    return (values) => {
      const newFreak = { ...freak, [name]: values.map(unmapTechnology) };
      onChange(newFreak);
    };
  }

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const { technologies } = data;
  console.log(33333333333, technologies);
  const technologyOptions = technologies.map(mapTechnology);

  return (
    <Form id="add-freak-form" className=" mx-2 p-3" onSubmit={ onSubmit }>
      <Form.Group className="mb-3">
        <Form.Label>Your name*</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              required
              data-testid="first-name-input"
              placeholder="First name"
              value={ freak.firstName }
              onChange={ triggerChange(FreakModelKeys.firstName) }
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              pattern="^[A-Za-z]+$"
              required
              data-testid="last-name-input"
              placeholder="Last name"
              value={ freak.lastName }
              onChange={ triggerChange(FreakModelKeys.lastName) }
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
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
          value={ freak.role?.name ?? '' }
          onChange={ triggerObjectChange(FreakModelKeys.role) }
        >
          <option value="">Pick One</option>
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
          value={ freak.level?.name ?? '' }
          onChange={ triggerObjectChange(FreakModelKeys.level) }
        >
          <option value="">Pick One</option>
          <option data-testid="level-option" value="Master">Master</option>
          <option data-testid="level-option" value="Expert">Expert</option>
          <option data-testid="level-option" value="Proficient">Proficient</option>
          <option data-testid="level-option" value="Competent">Competent</option>
          <option data-testid="level-option" value="Advanced">Advanced</option>
          <option data-testid="level-option" value="Novice">Novice</option>
          <option data-testid="level-option" value="Intern">Intern</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Norm*</Form.Label>
        <Form.Select
          required
          data-testid="norm-input"
          value={ freak.norm?.name ?? '' }
          onChange={ triggerObjectChange(FreakModelKeys.norm) }
        >
          <option value="">Pick One</option>
          <option data-testid="norm-option" value="Full time">Full time</option>
          <option data-testid="norm-option" value="Part time">Part time</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Skills</Form.Label>
        <Select
          options={ technologyOptions }
          menuPlacement="top"
          testid="skills-input"
          isMulti
          multiple={ true }
          value={ freak.technologies.map(mapTechnology) }
          onChange={ handleSelectChange(FreakModelKeys.technologies) }
        />
      </Form.Group>
    </Form>
  );
}

EditFreakForm.propTypes = {
  freak: PropTypes.shape(FreakModelProps),
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

EditFreakForm.defaultProps = {
  freak: FreakModelDefault,
};

export default EditFreakForm;
