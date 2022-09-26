import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function FadeTransition({ children }) {
  return AnimatedPage({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    children,
  });
}

FadeTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FadeTransition;
