import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditFreakForm from '../../components/EditFreakForm/EditFreakForm';
import { freaks } from '../../mock-data/freaks.json';
import { FreakModelDefault } from '../../models/freak';

function EditFreakPage() {
  const { id } = useParams();

  const [ freak, setFreak ] = useState(FreakModelDefault);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const tile = freaks.find((user) => user.id);

  console.log(freak);

  // useEffect(() => {
  //   fetch(freaks)
  //     .then((res) => {
  //       return res.json()
  //     );
  // }, []);

  // const params = useParams();

  // const [ freak, setFreak ] = useState([]);

  // useEffect(() => {
  //   freaks.get(`http://localhost:3000/freaks/${ params.id }`)
  //     .then((res) => {
  //       console.log(res);
  //       setFreak(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [ params.id ]);

  return (
    <div>
      <h1>
        Create a new Freak -
        { id }
      </h1>
      { tile.id }
      <EditFreakForm
        freak={ freak }
        onChange={ setFreak }
        onSubmit={ handleSubmit }
      />
    </div>
  );
}

export default EditFreakPage;
