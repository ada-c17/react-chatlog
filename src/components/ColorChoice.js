import './ColorChoice.css';
const ColorChoice = ({ sender, updateSenderColor }) => {
  return (
    <div className="color-choice">
      <div className="sender">
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
    </div>
  );
};

export default ColorChoice;
