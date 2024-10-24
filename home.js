import React from 'react';
import TariffMonitor from './tariff'
import EnergyAnalytics from './enerygy';
import SmartSchedule from './smartshcedule';
import SolarManagement from './solar';
const HomePage = () => (
  <div>
    <header>
      <h1>TechnoX Energy Management Platform</h1>
    </header>
    <div className="container">
      <TariffMonitor />
      <EnergyAnalytics />
      <SmartSchedule />
      <SolarManagement />
    </div>
  
  </div>
);

export default HomePage;
