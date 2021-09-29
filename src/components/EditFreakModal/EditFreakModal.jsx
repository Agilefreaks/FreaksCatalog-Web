import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Modal from '../Modal/Modal';
import EditFreakForm from '../EditFreakForm/EditFreakForm';
import { FreakModelDefault, FreakModelProps } from '../../models/freak';
import UpdateFreakMutation from '../../graphql/queries/mutations/Freak';

function mapFreak(freak) {
  return {
    id: freak.id,
    firstName: freak.firstName,
    lastName: freak.lastName,
    description: freak.description,
    email: freak.email,
    normId: parseInt(freak.norm.id, 10),
    roleId: parseInt(freak.role.id, 10),
    levelId: parseInt(freak.level.id, 10),
  };
}

function EditFreakModal({ title, isOpen, onClose, onSubmit, freak: initialFreak }) {
  const [ freak, setFreak ] = useState(initialFreak);

  const [ updateFunction, {
    loading,
    error,
  } ] = useMutation(UpdateFreakMutation.FreakUpdate());

  async function handleSubmit(e) {
    e.preventDefault();
    await updateFunction({ variables: mapFreak(freak) });
    onSubmit();
  }

  const getHeader = () => (
    <Button
      className="app-button -gray"
      variant="default"
      onClick={ () => setFreak(initialFreak) }
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

EditFreakModal.propTypes = {
  freak: PropTypes.shape(FreakModelProps),
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EditFreakModal.defaultProps = {
  freak: FreakModelDefault,
};

export default EditFreakModal;
