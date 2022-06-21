import './ColorChoice.css';
import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = ({ userClassifer, handleTextColor, textColor }) => {
  const sender = userClassifer === 'localUser' ? 'Estragon' : 'Vladimir';
  let colorClass;
  if (textColor) {
    // asynchronous process, textColor could be undefined
    colorClass =
      sender === 'Estragon' ? textColor['localUser'] : textColor['remoteUser'];
  }

  return (
    <div>
      <h3 className={colorClass}>{sender}'s Color</h3>
      <div className="button-container">
        <button
          onClick={() =>
            handleTextColor({ user: { userClassifer }, color: 'red' })
          }
        >
          🔴
        </button>
        <button
          onClick={() =>
            handleTextColor({ user: { userClassifer }, color: 'yellow' })
          }
        >
          🟡
        </button>
        <button
          onClick={() =>
            handleTextColor({ user: { userClassifer }, color: 'blue' })
          }
        >
          🔵
        </button>
        <button
          onClick={() =>
            handleTextColor({ user: { userClassifer }, color: 'defult' })
          }
        >
          ⚫️
        </button>
      </div>
    </div>
  );
};

ColorChoice.propTypes = {
  userClassifer: PropTypes.string.isRequired,
  handleTextColor: PropTypes.func.isRequired,
  textColor: PropTypes.object.isRequired,
};

export default ColorChoice;
