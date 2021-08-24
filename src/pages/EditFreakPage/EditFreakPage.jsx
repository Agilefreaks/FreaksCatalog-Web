import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditFreakForm from '../../components/EditFreakForm/EditFreakForm';
import { freaks } from '../../mock-data/freaks.json';

function findFreak(id) {
  return (freak) => freak.id === id;
}

function EditFreakPage() {
  let { id } = useParams();
  id = parseInt(id, 10);

  const [ freak, setFreak ] = useState(freaks.find(findFreak(id)));

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>
        Create a new Freak -
        { id }
      </h1>
      <EditFreakForm
        freak={ freak }
        onChange={ setFreak }
        onSubmit={ handleSubmit }
      />
    </div>
  );
}

export default EditFreakPage;
