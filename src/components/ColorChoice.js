import React from 'react';
import './ColorChoice.css';

const ColorChoice = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.colorCallback(event.target.value);
  };
  console.log(props.colorCallback);
  console.log(props.print);

  return (
    <div>
      <span>
        <label htmlFor="red">🔴</label>
        <input
          type="radio"
          value="red"
          name="color"
          id="red"
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor="yellow">🟡</label>
        <input
          type="radio"
          value="yellow"
          name="color"
          id="yellow"
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor="green">🟢</label>
        <input
          type="radio"
          value="green"
          name="color"
          id="green"
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor="blue">🔵</label>
        <input
          type="radio"
          value="blue"
          name="color"
          id="blue"
          onChange={onFormSubmit}
        />
      </span>
      <span>
        <label htmlFor="purple">🟣</label>
        <input
          type="radio"
          value="purple"
          name="color"
          id="purple"
          onChange={onFormSubmit}
        />
      </span>
    </div>
  );
};

export default ColorChoice;
