import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QueryFilterModal from '../../components/QueryFilterModal/QueryFilterModal';
import FreaksGrid from '../../components/FreaksGrid/FreaksGrid';
import AddFreakModal from '../../components/AddFreakModal/AddFreakModal';
import FilterType from '../../filters/FilterType';
import FreaksQueries from '../../graphql/queries/freaks';
import './ViewFreaks.scss';

const modals = {
  SKILLS: FilterType.skills,
  PROJECTS: FilterType.projects,
  ADD: 'addFreak',
};

function ViewFreaks() {
  const [ openModal, setOpenModal ] = useState(null);

  const { loading, error, data } = useQuery(FreaksQueries.getAll());

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const freaks = data.freaks.nodes;
  const { technologies, projects } = data;

  return (
    <motion.div
      className="view-freaks"
      initial={ { width: 0 } }
      animate={ { width: '100%', transition: { duration: 0.25 } } }
    >
      <div className="view-freaks__filter-nav">
        <QueryFilterModal
          title="Skills"
          keywords={ technologies }
          modalId={ modals.SKILLS }
          isOpen={ openModal === modals.SKILLS }
          setOpenModal={ setOpenModal }
          filterId={ FilterType.skills }
        />
        <QueryFilterModal
          title="Projects"
          keywords={ projects }
          modalId={ modals.PROJECTS }
          isOpen={ openModal === modals.PROJECTS }
          setOpenModal={ setOpenModal }
          filterId={ FilterType.projects }
        />
      </div>
      <div className="view-freaks__tiles-content">
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
    </motion.div>
  );
}

export default ViewFreaks;
