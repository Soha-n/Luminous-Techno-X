import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const TariffMonitor = () => {
  const [tariffs, setTariffs] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get('/api/tariff')
  //     .then(res => setTariffs(res.data))
  //     .catch(err => {
  //       setError('Failed to load tariff data. Please try again later.');
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div className="tariff-monitor">
      <h2>Current and Upcoming Tariffs</h2>
      // <ul>
      //   {tariffs.map((tariff, index) => (
      //     <li key={index}>
      //       <strong>{tariff.time}:</strong> ${tariff.rate}/kWh
      //     </li>
      //   ))}
      // </ul>
    </div>
  );
};

export default TariffMonitor;
