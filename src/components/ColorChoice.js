import React from 'react';
import './ColorChoice.css';
import { useState } from 'react';

const ColorChoice = ({ colorCallback, id }) => {
  const [color, setColor] = useState('orange');

  const onFormSubmit = (event) => {
    event.preventDefault();
    setColor(event.target.value);
  };
  colorCallback(color);
  console.log(color);
  console.log(colorCallback);

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

export default ColorChoice;
