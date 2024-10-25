import React from 'react';
import TariffMonitor from './tariff';
import EnergyAnalytics from './enerygy';
import SmartSchedule from './smartshcedule';
import SolarManagement from './solar';
import './HomePage.css'; // CSS for enhanced styling
import { FaChartLine, FaBolt, FaCalendarAlt, FaSolarPanel } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>TechnoX</h1>
          <p>Manage your energy consumption efficiently and effectively.</p>
        </div>
      </header>
      <section className="container">
        <div className="card">
          <FaChartLine className="card-icon" />
          <h3>Tariff Monitor</h3>
          <TariffMonitor />
        </div>
        <div className="card">
          <FaBolt className="card-icon" />
          <h3>Energy Analytics</h3>
          <EnergyAnalytics />
        </div>
        <div className="card">
          <FaCalendarAlt className="card-icon" />
          <h3>Smart Schedule</h3>
          <SmartSchedule />
          </div>
        <div className="card">
          <FaSolarPanel className="card-icon" />
          <h3>Solar Management</h3>
          <SolarManagement />
        </div>
      </section>
    </div>
  );
};

export default HomePage;