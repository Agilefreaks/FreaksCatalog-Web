import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function HorizontalTransition({ children }) {
  return AnimatedPage({
    initial: { y: '-100%' },
    animate: { y: 0, transition: { duration: 0.25 } },
    children,
  });
}

HorizontalTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HorizontalTransition;
