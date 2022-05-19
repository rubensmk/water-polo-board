import { useEffect, useState } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import restartIcon from '../../assets/restart.png';

interface Props {
  stopAll: boolean;
  setStopAll: (e: boolean) => void;
  setResumeAll: (e: boolean) => void;
  resumeAll: boolean;
}

export default function Timers({
  stopAll,
  resumeAll,
  setStopAll,
  setResumeAll,
}: Props) {
  const [mainTimer, setMainTimer] = useState(30);
  const [mainTimer2, setMainTimer2] = useState(20);
  const [mainTimer3, setMainTimer3] = useState(30);

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const minutes = Math.floor(mainTimer / 60);
  const seconds = mainTimer % 60;

  const minutes2 = Math.floor(mainTimer2 / 60);
  const seconds2 = mainTimer2 % 60;

  const minutes3 = Math.floor(mainTimer3 / 60);
  const seconds3 = mainTimer3 % 60;

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  const [minutesLeft2, minutesRight2] = String(minutes2)
    .padStart(2, '0')
    .split('');
  const [secondsLeft2, secondsRight2] = String(seconds2)
    .padStart(2, '0')
    .split('');

  const [minutesLeft3, minutesRight3] = String(minutes3)
    .padStart(2, '0')
    .split('');
  const [secondsLeft3, secondsRight3] = String(seconds3)
    .padStart(2, '0')
    .split('');

  useEffect(() => {
    if (isActive && mainTimer > 0) {
      setTimeout(() => {
        setMainTimer(mainTimer - 1);
      }, 1000);
    } else if (isActive && mainTimer === 0) {
      setIsActive(false);
      setMainTimer(30);
    }
  }, [isActive, mainTimer]);

  useEffect(() => {
    if (isActive2 && mainTimer2 > 0) {
      setTimeout(() => {
        setMainTimer2(mainTimer2 - 1);
      }, 1000);
    } else if (isActive2 && mainTimer2 === 0) {
      setIsActive2(false);
      setMainTimer2(20);
    }
  }, [isActive2, mainTimer2]);

  useEffect(() => {
    if (isActive3 && mainTimer3 > 0) {
      setTimeout(() => {
        setMainTimer3(mainTimer3 - 1);
      }, 1000);
    } else if (isActive3 && mainTimer3 === 0) {
      setIsActive3(false);
      setMainTimer3(30);
    }
  }, [isActive3, mainTimer3]);

  useEffect(() => {
    if (stopAll) {
      setIsActive(false);
      setIsActive3(false);
      setStopAll(false);
    }
    if (resumeAll) {
      if (mainTimer < 30) {
        setIsActive(true);
      }
      if (mainTimer3 < 30) {
        setIsActive3(true);
      }

      setResumeAll(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopAll, resumeAll]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') {
        setIsActive3(false);
        setIsActive((prevState) => !prevState);
        setTimeout(() => {
          setMainTimer3(30);
        }, 1000);
      }
      if (e.key === '2') {
        setMainTimer(30);
      }
      if (e.key === '3') {
        setIsActive2((prevState) => !prevState);
      }
      if (e.key === '4') {
        setMainTimer2(20);
      }
      if (e.key === '5') {
        setIsActive(false);
        setIsActive3((prevState) => !prevState);
        setTimeout(() => {
          setMainTimer(30);
        }, 1000);
      }
      if (e.key === '6') {
        setMainTimer3(30);
      }
    });
  }, []);

  return (
    <>
      <div className="playTimer">
        <h1
          className={!isActive ? 'disabled' : 'clock'}
        >{`${minutesLeft}${minutesRight}:${secondsLeft}${secondsRight}`}</h1>
        <div>
          <button
            className="btn-timer"
            type="button"
            onClick={() => {
              setIsActive3(false);
              setIsActive((prevState) => !prevState);
            }}
          >
            {isActive ? (
              <img src={pauseIcon} alt="play" className="icon" />
            ) : (
              <img src={playIcon} alt="pause" className="icon" />
            )}
          </button>
          {!isActive && (
            <>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer((prevState) => prevState - 1)}
              >
                -
              </button>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer((prevState) => prevState + 1)}
              >
                +
              </button>{' '}
            </>
          )}

          {!isActive && (
            <button
              className="btn-timer"
              type="button"
              onClick={() => setMainTimer(30)}
            >
              <img src={restartIcon} alt="pause" className="icon" />
            </button>
          )}
        </div>
      </div>
      <div className="playTimer">
        <h1 className="clock">{`${minutesLeft2}${minutesRight2}:${secondsLeft2}${secondsRight2}`}</h1>
        <div>
          <button
            className="btn-timer"
            type="button"
            onClick={() => setIsActive2((prevState) => !prevState)}
          >
            {isActive2 ? (
              <img src={pauseIcon} alt="play" className="icon" />
            ) : (
              <img src={playIcon} alt="pause" className="icon" />
            )}
          </button>
          {!isActive2 && (
            <>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer2((prevState) => prevState - 1)}
              >
                -
              </button>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer2((prevState) => prevState + 1)}
              >
                +
              </button>{' '}
            </>
          )}
          {!isActive2 && (
            <button
              className="btn-timer"
              type="button"
              onClick={() => setMainTimer2(20)}
            >
              <img src={restartIcon} alt="pause" className="icon" />
            </button>
          )}
        </div>
      </div>
      <div className="playTimer">
        <h1
          className={!isActive3 ? 'disabled' : 'clock'}
        >{`${minutesLeft3}${minutesRight3}:${secondsLeft3}${secondsRight3}`}</h1>
        <div>
          <button
            className="btn-timer"
            type="button"
            onClick={() => {
              setIsActive(false);
              setIsActive3((prevState) => !prevState);
            }}
          >
            {isActive3 ? (
              <img src={pauseIcon} alt="play" className="icon" />
            ) : (
              <img src={playIcon} alt="pause" className="icon" />
            )}
          </button>
          {!isActive3 && (
            <>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer3((prevState) => prevState - 1)}
              >
                -
              </button>
              <button
                type="button"
                className="btn-seconds"
                onClick={() => setMainTimer3((prevState) => prevState + 1)}
              >
                +
              </button>{' '}
            </>
          )}
          {!isActive3 && (
            <button
              className="btn-timer"
              type="button"
              onClick={() => setMainTimer3(30)}
            >
              <img src={restartIcon} alt="pause" className="icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
