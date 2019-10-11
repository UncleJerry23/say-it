import React from 'react';
import PropTypes from 'prop-types';
import Thought from './Thought';
import { Thread } from '../styles/Thread';

function ThoughtList({ thoughts }) {
  const thoughtList = thoughts.map((message, i) => {
    return (
      <Thought key={i} message={message} />
    );
  });

  return (
    <Thread>
      {thoughtList}
    </Thread>
  );
}

ThoughtList.propTypes = {
  thoughts: PropTypes.array.isRequired
};

export default ThoughtList;
