import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault } from '../../models/freak';
import CreateFreakMutation from '../../graphql/queries/mutations/Freak';

// const CreateFreakModel = {
//   firstName: 'Test',
//   lastName: 'Test',
//   description: 'You got bamboozled.',
//   email: 'test@email.com',
//   normId: 1,
//   roleId: 1,
//   levelId: 1,
// };

function mapFreak(freak) {
  return {
    firstName: freak.firstName,
    lastName: freak.lastName,
    description: freak.description,
    email: freak.email,
    normId: parseInt(freak.norm.id, 10),
    roleId: parseInt(freak.role.id, 10),
    levelId: parseInt(freak.level.id, 10),
  };
}

function AddFreakModal({ title, isOpen, onClose }) {
  const [ freak, setFreak ] = useState(FreakModelDefault);

  const [ mutateFunction, {
    loading,
    error,
  } ] = useMutation(CreateFreakMutation.FreakCreate());

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateFunction({ variables: mapFreak(freak) });
    freak.value = '';
  };

  const getHeader = () => (
    <Button
      className="app-button -gray"
      variant="default"
      onClick={ () => setFreak(FreakModelDefault) }
    >
      Reset
    </Button>
  );

  const getFooter = () => (
    <Button
      className="app-button -large"
      form="add-freak-form"
      type="submit"
      variant="primary"
    >
      Submit
    </Button>
  );

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${ error.message }`;

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      headerContent={ getHeader() }
      footerContent={ getFooter() }
      onClose={ onClose }
    >
      <EditFreakForm
        freak={ freak }
        onChange={ setFreak }
        onSubmit={ handleSubmit }
      />
    </Modal>
  );
}

AddFreakModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddFreakModal;
