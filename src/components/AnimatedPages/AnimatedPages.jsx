import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

function FadeTransitionAnimatedPage({ children }) {
  return (
    <motion.div
      initial={ { opacity: 0 } }
      animate={ { opacity: 1, transition: { duration: 0.2 } } }
    >
      { children }
    </motion.div>
  );
}

FadeTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};
function HorizontalTransitionAnimatedPage({ children }) {
  return (
    <motion.div
      initial={ { y: '-100%' } }
      animate={ { y: 0, transition: { duration: 0.25 } } }
    >
      { children }
    </motion.div>
  );
}

HorizontalTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};

function VerticalTransitionAnimatedPage({ children }) {
  return (
    <motion.div
      initial={ { width: 0 } }
      animate={ { width: '100%', transition: { duration: 0.25 } } }
    >
      { children }
    </motion.div>
  );
}

VerticalTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  HorizontalTransitionAnimatedPage,
  FadeTransitionAnimatedPage,
  VerticalTransitionAnimatedPage,
};
