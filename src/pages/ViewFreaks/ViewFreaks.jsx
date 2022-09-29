import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import FreaksGrid from '../../components/FreaksGrid/FreaksGrid';
import FadeTransition from '../../components/AnimatedPages/FadeTransition';
import AddFreakModal from '../../components/AddFreakModal/AddFreakModal';
import './ViewFreaks.scss';
import FilterType from '../../filters/FilterType';
import FreaksQueries from '../../graphql/queries/freaks';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

const modals = {
  ADD: 'addFreak',
};

function ViewFreaks() {
  const [ openModal, setOpenModal ] = useState(null);

  const { loading, error, data } = useQuery(FreaksQueries.getAll());

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const freaks = data.freaks.nodes;
  const filters = (({ technologies, projects }) => ({ technologies, projects }))(data);

  return (
    <FadeTransition>
      <div className="view-freaks">
        <div className="view-freaks__tiles-content">
          <FilterMenu keywords={ filters } />
          <FreaksGrid freaks={ freaks } />
          <Button
            className="button-add-user"
            variant="outline-secondary"
            onClick={ () => setOpenModal(modals.ADD) }
          >
            <FontAwesomeIcon icon="user-plus" />
          </Button>
          <AddFreakModal
            title="Add Freak"
            isOpen={ openModal === modals.ADD }
            onClose={ () => setOpenModal(null) }
          />
        </div>
      </div>
    </FadeTransition>
  );
}

export default ViewFreaks;
