import React from 'react';
import { Button } from 'react-bootstrap';
import FreakDetails from '../../components/FreakDetails/FreakDetails';
import './ViewFreakPage.scss';

function ViewFreakPage() {
  return (
    <div>
      <FreakDetails />
      <Button type="button" className="btn btn-secondary">Edit</Button>
      <Button type="button" className="btn btn-danger">Delete</Button>
    </div>
  );
}

ViewFreakPage.propTypes = {
};

export default ViewFreakPage;
