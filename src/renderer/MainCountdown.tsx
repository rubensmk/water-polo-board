import { useEffect, useState } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import restartIcon from '../../assets/restart.png';

export default function MainCountdown() {
  const [mainTimer, setMainTimer] = useState(8 * 60);
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
    setMainTimer(8 * 60);
  }

  useEffect(() => {
    if (isActive && mainTimer > 0) {
      setTimeout(() => {
        setMainTimer(mainTimer - 1);
      }, 1000);
    } else if (isActive && mainTimer === 0) {
      setIsActive(false);
    }
  }, [isActive, mainTimer]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') {
        setIsActive((prevState) => !prevState);
      }
      if (e.key === '2') {
        handleRestart();
      }
    });
  }, []);

  return (
    <div className="periodTimer">
      <h1 className="timer">
        {`${minutesLeft}${minutesRight}:${secondsLeft}${secondsRight}`}
      </h1>

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
