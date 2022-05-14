import { useState } from 'react';

function PeriodCounter() {
  const [periodCounter, setPeriodCounter] = useState(1);

  function handleDecrease() {
    if (periodCounter === 1) {
      return;
    }
    setPeriodCounter((prevState) => prevState - 1);
  }

  function handleIncrease() {
    if (periodCounter === 4) {
      return;
    }
    setPeriodCounter((prevState) => prevState + 1);
  }
  return (
    <div className="periodCounter">
      <button
        type="button"
        className="btn-change"
        onClick={handleDecrease}
      >{`<`}</button>
      <h1 className="counter">{periodCounter}/4</h1>
      <button
        type="button"
        className="btn-change"
        onClick={handleIncrease}
      >{`>`}</button>
    </div>
  );
}

export default PeriodCounter;
