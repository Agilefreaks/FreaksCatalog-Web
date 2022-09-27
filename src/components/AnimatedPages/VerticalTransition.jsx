import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function VerticalTransition({ children }) {
  return AnimatedPage({
    initial: { opacity: 0, y: '200%' },
    animate: {
      opacity: [ 0, 0, 0, 1 ],
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: {
      opacity: [ 1, 1, 0, 0 ],
      y: '200%',
      transition: { duration: 0.5, ease: 'easeIn' },
    },
    children,
  });
}

VerticalTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VerticalTransition;
