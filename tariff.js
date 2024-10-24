import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TariffMonitor = () => {
  const [tariffs, setTariffs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example of an API call
    axios.get('/api/tariff')
      .then(res => setTariffs(res.data))
      .catch(err => {
        setError('Failed to load tariff data. Please try again later.');
        console.error(err); // For debugging purposes
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tariff-monitor">
      <h2>Current and Upcoming Tariffs</h2>
      <ul>
        {tariffs.map((tariff, index) => (
          <li key={index}>
            <strong>{tariff.time}:</strong> ${tariff.rate}/kWh
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TariffMonitor;
