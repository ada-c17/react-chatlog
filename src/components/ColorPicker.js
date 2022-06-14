import PropTypes from 'prop-types';

const ColorPicker = ({ updateColor, color, name }) => {
  return (
    <div>
      <p className={color}>{name}'s color:</p>
      <p>
        <button onClick={() => updateColor('red', name)}>🔴</button>
        <button onClick={() => updateColor('orange', name)}>🟠</button>
        <button onClick={() => updateColor('yellow', name)}>🟡</button>
        <button onClick={() => updateColor('green', name)}>🟢</button>
        <button onClick={() => updateColor('blue', name)}>🔵</button>
        <button onClick={() => updateColor('purple', name)}>🟣</button>
      </p>
    </div>
  );
};

export default ColorPicker;

ColorPicker.propTypes = {
  updateColor: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
