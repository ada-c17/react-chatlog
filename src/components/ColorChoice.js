const ColorChoice = (props) => {
  return (
    <section className="widget">
      <h3 className={props.color}>{props.sender}'s color:</h3>
      <nav>
        <button onClick={() => props.setColorCallback('red')}>🔴</button>
        <button onClick={() => props.setColorCallback('orange')}>🟠</button>
        <button onClick={() => props.setColorCallback('yellow')}>🟡</button>
        <button onClick={() => props.setColorCallback('green')}>🟢</button>
        <button onClick={() => props.setColorCallback('blue')}>🔵</button>
        <button onClick={() => props.setColorCallback('purple')}>🟣</button>
      </nav>
    </section>
  );
};

export default ColorChoice;
