const CounterV1 = ({ counter, setCounter }) => {
  return (
    <main className="counterv1">
      <div className="container">
        <div>
          {counter !== 0 ? (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          ) : null}
        </div>
        <p>{counter}</p>
        <div>
          {counter !== 10 ? (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          ) : null}
        </div>
      </div>
      <button
        className="reset"
        type="button"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </main>
  );
};

export default CounterV1;
