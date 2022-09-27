import PropTypes from 'prop-types';
import AnimatedPage from './AnimatedPages';

function HorizontalTransition({ children }) {
  return AnimatedPage({
    initial: { opacity: 0, x: '-100%' },
    animate: {
      opacity: [ 0, 0, 0.75, 1 ],
      x: 0,
      transition: { delay: 0.25, duration: 0.75, ease: 'easeOut' },
    },
    exit: { opacity: [ 1, 0 ], x: '-100%', transition: { duration: 0.5, ease: 'easeIn' } },
    children,
  });
}

HorizontalTransition.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HorizontalTransition;
