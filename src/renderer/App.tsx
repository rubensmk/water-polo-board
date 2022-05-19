/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GuestScore from './GuestScore';
import HomeScore from './HomeScore';
import MainCountdown from './MainCountdown';
import PeriodCounter from './PeriodCounter';
import Timers from './Timers';

const Home = () => {
  const [stopAll, setStopAll] = useState(false);
  const [resumeAll, setResumeAll] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === '9') {
        setStopAll(true);
      }
      if (e.key === '0') {
        setResumeAll(true);
      }
    });
  }, []);

  return (
    <main className="main">
      <section className="timerSection">
        <Timers
          stopAll={stopAll}
          setStopAll={setStopAll}
          resumeAll={resumeAll}
          setResumeAll={setResumeAll}
        />
      </section>
      <section className="mainSection">
        <HomeScore />
        <div className="period">
          <MainCountdown
            stopAll={stopAll}
            setStopAll={setStopAll}
            resumeAll={resumeAll}
            setResumeAll={setResumeAll}
          />
          <PeriodCounter />
        </div>
        <GuestScore />
      </section>
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
