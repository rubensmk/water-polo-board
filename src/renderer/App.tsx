import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GuestScore from './GuestScore';
import HomeScore from './HomeScore';
import MainCountdown from './MainCountdown';
import PeriodCounter from './PeriodCounter';
import ThirtyRuleCountdown from './ThirtyRuleCountdown';
import TwentyRuleCountdown from './TwentyRuleCountdown';

// TODO: Responsividade dos contadores e geral
// TODO: Timer principal de periodo e os dois timers de jogadas e expulsos

const Home = () => {
  return (
    <main className="main">
      <section className="timerSection">
        <ThirtyRuleCountdown />
        <TwentyRuleCountdown />
      </section>
      <section className="mainSection">
        <HomeScore />
        <div className="period">
          <MainCountdown />
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
