import React from 'react';
import PropTypes from 'prop-types';

const ChatDescription = ({ colorClasses, localName, remoteNames }) => {
  return (
    <h1>
      Conversation between{' '}
      <span className={colorClasses.local}>{localName}</span> and{' '}
      <span className={colorClasses.remote}>{remoteNames}</span>
    </h1>
  );
};

ChatDescription.propTypes = {
  colorClasses: PropTypes.shape({
    local: PropTypes.string,
    remote: PropTypes.string,
  }).isRequired,
  localName: PropTypes.string.isRequired,
  remoteNames: PropTypes.string.isRequired,
};

export default ChatDescription;
