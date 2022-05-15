import { useEffect, useState } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import restartIcon from '../../assets/restart.png';

export default function TwentyRuleCountdown() {
  const [mainTimer, setMainTimer] = useState(20);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(mainTimer / 60);
  const seconds = mainTimer % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  function handleRestart() {
    setMainTimer(20);
  }

  useEffect(() => {
    if (isActive && mainTimer > 0) {
      setTimeout(() => {
        setMainTimer(mainTimer - 1);
      }, 1000);
    } else if (isActive && mainTimer === 0) {
      setIsActive(false);
      setMainTimer(20);
    }
  }, [isActive, mainTimer]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === '5') {
        setIsActive((prevState) => !prevState);
      }
      if (e.key === '6') {
        handleRestart();
      }
    });
  }, []);

  return (
    <div className="playTimer">
      <h1 className="clock">{`${minutesLeft}${minutesRight}:${secondsLeft}${secondsRight}`}</h1>
      <button
        className="btn-timer"
        type="button"
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        {isActive ? (
          <img src={pauseIcon} alt="play" className="icon" />
        ) : (
          <img src={playIcon} alt="pause" className="icon" />
        )}
      </button>
      {!isActive && (
        <button className="btn-timer" type="button" onClick={handleRestart}>
          <img src={restartIcon} alt="pause" className="icon" />
        </button>
      )}
    </div>
  );
}
