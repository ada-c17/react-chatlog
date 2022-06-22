import './ColorChoice.css';
import PropTypes from 'prop-types';

const ColorChoice = ({ sender, updateSenderColor }) => {
  return (
    <div className="sender color-choice">
      <p>{sender}'s color:</p>
      <div className="colors">
        <button onClick={() => updateSenderColor('red')}>
          <span>🔴</span>
        </button>
        <button onClick={() => updateSenderColor('orange')}>
          <span>🟠</span>
        </button>
        <button onClick={() => updateSenderColor('yellow')}>
          <span>🟡</span>
        </button>
        <button onClick={() => updateSenderColor('green')}>
          <span>🟢</span>
        </button>
        <button onClick={() => updateSenderColor('blue')}>
          <span>🔵</span>
        </button>
        <button onClick={() => updateSenderColor('purple')}>
          <span>🟣</span>
        </button>
      </div>
    </div>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  updateSenderColor: PropTypes.func.isRequired,
};

export default ColorChoice;
