import { useEffect, useState } from 'react';

export default function HomeScore() {
  const [homeTeamPoints, setHomeTeamPoints] = useState(0);

  function minusGoal() {
    if (homeTeamPoints === 0) return;
    setHomeTeamPoints((prevState) => prevState - 1);
  }

  function plusGoal() {
    setHomeTeamPoints((prevState) => prevState + 1);
  }

  return (
    <div className="goalScore">
      <button type="button" className="btn-goals" onClick={minusGoal}>
        {`<`}
      </button>
      <h1 className="goalPoint">{homeTeamPoints}</h1>
      <button type="button" className="btn-goals" onClick={plusGoal}>
        {`>`}
      </button>
    </div>
  );
}
