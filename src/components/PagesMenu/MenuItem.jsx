import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuItem({ path, label, image }) {
  return (
    <Link to={ path }>
      <button type="button" className="menu-container__item">
        <img className="menu-container__item-img" src={ image } />
        <p className="menu-container__item-label">{ label }</p>
      </button>
    </Link>
  );
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MenuItem;
