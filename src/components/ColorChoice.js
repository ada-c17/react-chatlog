const ColorChoice = (props) => {
  return (
    <section className="widget">
      <h3 className={props.color}>{props.name}'s color:</h3>
      <div>
        <button onClick={() => props.updateColorFn('red')}>🔴</button>
        <button onClick={() => props.updateColorFn('orange')}>🟠</button>
        <button onClick={() => props.updateColorFn('yellow')}>🟡</button>
        <button onClick={() => props.updateColorFn('green')}>🟢</button>
        <button onClick={() => props.updateColorFn('blue')}>🔵</button>
        <button onClick={() => props.updateColorFn('purple')}>🟣</button>
      </div>
    </section>
  );
};

export default ColorChoice;
