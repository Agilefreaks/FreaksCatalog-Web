import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function FadeTransition({ children }) {
  return AnimatedPage({
    initial: { opacity: 0 },
    animate: { opacity: [ 0, 0, 0, 1 ], transition: { duration: 1, ease: 'easeIn' } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    children,
  });
}

FadeTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FadeTransition;
