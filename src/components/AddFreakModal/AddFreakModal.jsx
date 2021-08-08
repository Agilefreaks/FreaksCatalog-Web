import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import '../FilterModal/FilterModal.scss';

function AddFilterModal({ title, isOpen, onClose }) {
  const [ checkedState, setCheckedState ] = useState([]);

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      checkedState={ checkedState }
      headerContent={ <button className="filter__button-reset" type="button" onClick={ () => setCheckedState([]) }>Reset</button> }
      footerContent={ <Button className="filter__button-apply" variant="primary py-2 px-5 " disabled>Summit</Button> }
      onClose={ onClose }
    >
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
          <Form.Text className="text-muted">
            We`ll never share your email with anyone else.
          </Form.Text>
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
            <option>Advanced</option>
            <option>Intern</option>
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
    </Modal>
  );
}

AddFilterModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddFilterModal;
