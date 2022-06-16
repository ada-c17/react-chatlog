import './ColorChoice.css';
const ColorChoice = ({ sender1, sender2 }) => {
  return (
    <div className="color-choice">
      <div className="sender1">
        <p>{sender1}'s color:</p>
        <p>🔴 🟠 🟡 🟢 🔵 🟣</p>
      </div>
      <div className="sender2">
        <p>{sender2}'s color:</p>
        <p>🔴 🟠 🟡 🟢 🔵 🟣</p>
      </div>
    </div>
  );
};

export default ColorChoice;
