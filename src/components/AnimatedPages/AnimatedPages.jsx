import { motion } from 'framer-motion';
import React from 'react';

function FadeTransitionAnimatedPage(props) {
  return (
    <motion.div
      className={ props.className }
      initial={ { opacity: 0 } }
      animate={ { opacity: 1, transition: { duration: 0.2 } } }
    >
      { props.children }
    </motion.div>
  );
}

function HorizontalTransitionAnimatedPage(props) {
  return (
    <motion.div
      className="view-freak"
      data-testid="view-freak"
      initial={ { y: '-100%' } }
      animate={ { y: 0, transition: { duration: 0.25 } } }
    >
      { props.children }
    </motion.div>
  );
}

function VerticalTransitionAnimatedPage(props) {
  return (
    <motion.div
      className="view-freaks"
      initial={ { width: 0 } }
      animate={ { width: '100%', transition: { duration: 0.25 } } }
    >
      { props.children }
    </motion.div>
  );
}

export {
  HorizontalTransitionAnimatedPage,
  FadeTransitionAnimatedPage,
  VerticalTransitionAnimatedPage,
};
