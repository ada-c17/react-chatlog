import './ColorChoice.css';
import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = ({ user, handleTextColor, textColor }) => {
  const sender = user === 'localUser' ? 'Estragon' : 'Vladimir';
  let colorClass;
  if (textColor) {
    // asynchronous process, otherwise the test will fail.
    colorClass =
      sender === 'Estragon' ? textColor['localUser'] : textColor['remoteUser'];
  }

  return (
    <div>
      <h3 className={colorClass}>{sender}'s Color</h3>
      <div className="button-container">
        <button
          onClick={() => handleTextColor({ user: { user }, color: 'red' })}
        >
          🔴
        </button>
        <button
          onClick={() => handleTextColor({ user: { user }, color: 'yellow' })}
        >
          🟡
        </button>
        <button
          onClick={() => handleTextColor({ user: { user }, color: 'blue' })}
        >
          🔵
        </button>
      </div>
    </div>
  );
};

ColorChoice.propTypes = {
  user: PropTypes.string.isRequired,
  handleTextColor: PropTypes.func.isRequired,
  textColor: PropTypes.object.isRequired,
};

export default ColorChoice;
