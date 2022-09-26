import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function VerticalTransition({ children }) {
  return AnimatedPage({
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.25 } },
    children,
  });
}

VerticalTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VerticalTransition;
