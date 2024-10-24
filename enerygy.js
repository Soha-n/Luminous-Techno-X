import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', usage: 400, savings: 240 },
  { name: 'Feb', usage: 300, savings: 139 },
  { name: 'Mar', usage: 200, savings: 980 },
];

const EnergyAnalytics = () => (
  <div className="energy-analytics">
    <h2>Energy Consumption Analytics</h2>
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="usage" stroke="#8884d8" />
      <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
);

export default EnergyAnalytics;
