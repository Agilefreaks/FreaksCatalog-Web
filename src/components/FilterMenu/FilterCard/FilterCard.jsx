import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterSetter } from '../../../filters/freaksFilter';
import CheckBoxList from '../../CheckBoxList/CheckBoxList';
import InputFilters from '../../InputFilters/InputFilters';
import './filtercard.scss';

function FilterCard({ title, keywords, filterId }) {
  const filters = useSelector((state) => state.filters);
  const [ checkedState, setCheckedState ] = useState(filters[filterId]);
  const [ active, setActive ] = useState(true);
  const [ filteredText, setFilteredText ] = useState('');
  const [ isHovering, setIsHovering ] = useState(false);
  const dispatch = useDispatch();

  const applyFilters = (result) => {
    setCheckedState(result);
    const setFilter = getFilterSetter(filterId);

    if (setFilter !== null) {
      dispatch(setFilter(result));
    }
  };

  return (
    <div className="filtercard" onMouseLeave={ () => setIsHovering(false) }>
      <div className="filtercard__title-container">
        <Button
          className={ `filtercard__dropdown-btn${ active ? '--active' : '' }` }
          variant="btn-secondary shadow-none"
          onClick={ () => setActive(!active) }
        >
          <FontAwesomeIcon icon="fa-caret-down" />
        </Button>
        <span className="filtercard__title" onMouseOver={ () => setIsHovering(true) }>
          { title }
        </span>
      </div>
      <InputFilters
        className={ `filtercard-input${ isHovering ? '__hovered' : '' }` }
        setFilteredText={ setFilteredText }
        active={ active }
      />
      <CheckBoxList
        keywords={ active ? keywords : [] }
        filteredText={ filteredText }
        checkedState={ checkedState }
        onChange={ applyFilters }
      />
    </div>
  );
}

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterId: PropTypes.string.isRequired,
};

export default FilterCard;
