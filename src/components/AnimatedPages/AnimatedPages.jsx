import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

function AnimatedPage({ initial, animate, exit, children }) {
  return (
    <motion.div initial={ initial } animate={ animate } exit={ exit }>
      { children }
    </motion.div>
  );
}

AnimatedPage.propTypes = {
  initial: PropTypes.shape.isRequired,
  animate: PropTypes.shape.isRequired,
  exit: PropTypes.shape.isRequired,
  children: PropTypes.element.isRequired,
};

export default AnimatedPage;
