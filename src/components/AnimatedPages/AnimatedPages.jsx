import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

function AnimatedPage({ initial, animate, children }) {
  return (
    <motion.div initial={ initial } animate={ animate }>
      { children }
    </motion.div>
  );
}

AnimatedPage.propTypes = {
  initial: PropTypes.shape.isRequired,
  animate: PropTypes.shape.isRequired,
  children: PropTypes.element.isRequired,
};

function FadeTransitionAnimatedPage({ children }) {
  return AnimatedPage({
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    children,
  });
}

FadeTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};
function HorizontalTransitionAnimatedPage({ children }) {
  return AnimatedPage({
    initial: { y: '-100%' },
    animate: { y: 0, transition: { duration: 0.25 } },
    children,
  });
}

HorizontalTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};

function VerticalTransitionAnimatedPage({ children }) {
  return AnimatedPage({
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.25 } },
    children,
  });
}

VerticalTransitionAnimatedPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  HorizontalTransitionAnimatedPage,
  FadeTransitionAnimatedPage,
  VerticalTransitionAnimatedPage,
};
