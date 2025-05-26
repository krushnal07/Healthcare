import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import { navLinks } from './data/navigation';
import { anatomyIndicators, healthStatusCardsData } from './data/healthData';
import { calendarData, upcomingScheduleData } from './data/appointments';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar navLinks={navLinks} />
        <DashboardMainContent
          anatomyIndicators={anatomyIndicators}
          healthStatusCardsData={healthStatusCardsData}
          calendarData={calendarData}
          upcomingScheduleData={upcomingScheduleData}
        />
      </div>
    </div>
  );
}

export default App;