import React from 'react';
import PropTypes from 'prop-types';
import { Blurb } from '../styles/blurb';

function Thought({ message }) {
  return (
    <Blurb>
      <p>{message.message}</p>
    </Blurb>
  );
}

Thought.propTypes = {
  message: PropTypes.object
};

export default Thought;
