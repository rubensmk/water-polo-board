import { useState } from 'react';

export default function GuestScore() {
  const [guestTeamPoints, setGuestTeamPoints] = useState(0);

  function minusGoal() {
    if (guestTeamPoints === 0) return;
    setGuestTeamPoints((prevState) => prevState - 1);
  }

  function plusGoal() {
    setGuestTeamPoints((prevState) => prevState + 1);
  }
  return (
    <div className="goalScore">
      <button type="button" className="btn-goals" onClick={minusGoal}>
        {`<`}
      </button>
      <h1 className="goalPoint">{guestTeamPoints}</h1>
      <button type="button" className="btn-goals" onClick={plusGoal}>
        {`>`}
      </button>
    </div>
  );
}
