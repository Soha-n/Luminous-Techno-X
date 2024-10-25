import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css'
import { Link } from 'react-router-dom';
const LandingPage = ({ onSignInClick }) => {


  const handleGoogleLogin = () => {
    alert("Google Login functionality is not yet implemented.");
  };

  const energyData = [
    { name: 'Solar', value: 40 },
    { name: 'Wind', value: 30 },
    { name: 'Water', value: 20 },
    { name: 'Others', value: 10 },
  ];
  const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="landing-page">
      <header className="landing-header">
        <button onClick={onSignInClick} className="sign-in-button">
          Sign In
        </button>
      </header>

      <section className="hero-section">
        <h1>Welcome to TechnoX</h1>
        <p>
          Revolutionizing energy management with cutting-edge technology. 
          Optimize your energy usage, reduce costs, and contribute to a sustainable future.
        </p>
        <button onClick={onSignInClick} className="cta-button">
          Get Started
        </button>
      </section>

      <section className="features-section">
        <h2>Features of TechnoX</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Real-Time Tariff Monitoring</h3>
            <p>Monitor electricity prices in real-time and adjust usage accordingly.</p>
          </div>
          <div className="feature">
            <h3>Energy Consumption Analytics</h3>
            <p>Analyze energy consumption patterns to maximize efficiency and savings.</p>
          </div>
          <div className="feature">
            <h3>Smart Scheduling</h3>
            <p>Automatically schedule appliances during low-cost tariff periods.</p>
          </div>
          <div className="feature">
            <h3>Solar Energy Management</h3>
            <p>Track solar production and manage battery storage effectively.</p>
          </div>
          <div className="feature">
            <h3>Cost-Benefit Analysis</h3>
            <p>Calculate potential savings and optimize your energy usage over time.</p>
          </div>
        </div>
      </section>

      <section className="energy-usage-section">
        <h2>Energy Usage Breakdown</h2>
        <p>Understand the sources of energy used by our platform.</p>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energyData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {energyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>Why Choose TechnoX?</h2>
        <p>
          At TechnoX, we believe in empowering users to make smarter energy choices.
          With our platform, you can take control of your energy consumption, enjoy 
          significant cost savings, and contribute to a greener planet.
        </p>
        <ul>
          <li>Advanced technology for energy monitoring and optimization</li>
          <li>User-friendly interface for easy management</li>
          <li>Significant cost savings by optimizing energy usage</li>
          <li>Commitment to sustainability and renewable energy solutions</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Follow us on social media to stay updated with the latest from TechnoX!</p>
        <div className="social-links">
          <a href="https://instagram.com/technox" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://linkedin.com/company/technox" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/technox" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </section>

      <section className="signin-section">
        <h2>Sign In</h2>
        <button onClick={onSignInClick} className="signin-email-button">
          Sign In with Gmail
        </button>
        <button onClick={handleGoogleLogin} className="signin-google-button">
          Sign In with Google
        </button>
      </section>
    </div>
  );
};

export default LandingPage;

