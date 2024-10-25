import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for historical tariffs
const tariffData = [
  { time: '6 AM', price: 0.1 },
  { time: '9 AM', price: 0.12 },
  { time: '12 PM', price: 0.15 },
  { time: '3 PM', price: 0.18 },
  { time: '6 PM', price: 0.25 },
  { time: '9 PM', price: 0.2 },
  { time: '12 AM', price: 0.08 },
];

const TariffMonitor = () => {
  return (
    <div className="tariff-monitor">
      <h2>Real-Time Tariff Monitor</h2>

      {/* Display Current Price */}
      <div className="current-tariff">
        <p>Current Price: <strong>$0.12 / kWh</strong></p>
        <p>Next Off-Peak Period: <strong>10:00 PM - 6:00 AM</strong></p>
      </div>

      {/* Historical Price Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={tariffData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="price" unit=" $/kWh" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TariffMonitor;
