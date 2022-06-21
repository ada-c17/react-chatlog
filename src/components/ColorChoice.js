import React from 'react';
import './ColorChoice.css';
import PropTypes from 'prop-types';

const ColorChoice = ({ colorCallback, id }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    colorCallback(event.target.value);
  };

  return (
    <div>
      <span>
        <label htmlFor={`red_${id ? id : 'new'}`}>🔴</label>
        <input
          type="radio"
          value="red"
          name="color"
          id={`red_${id ? id : 'new'}`}
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor={`yellow_${id ? id : 'new'}`}>🟡</label>
        <input
          type="radio"
          value="yellow"
          name="color"
          id={`yellow_${id ? id : 'new'}`}
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor={`green_${id ? id : 'new'}`}>🟢</label>
        <input
          type="radio"
          value="green"
          name="color"
          id={`green_${id ? id : 'new'}`}
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor={`blue_${id ? id : 'new'}`}>🔵</label>
        <input
          type="radio"
          value="blue"
          name="color"
          id={`blue_${id ? id : 'new'}`}
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor={`purple_${id ? id : 'new'}`}>🟣</label>
        <input
          type="radio"
          value="purple"
          name="color"
          id={`purple_${id ? id : 'new'}`}
          onChange={onFormSubmit}
        />
      </span>
    </div>
  );
};
ColorChoice.propTypes = {
  id: PropTypes.string.isRequired,
  colorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;
