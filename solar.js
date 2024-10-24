import React from 'react';

const SolarManagement = () => {
  const solarData = { production: 5.5, usage: 3.2, battery: 80 }; // Mock data

  return (
    <div className="solar-management">
      <h2>Solar Energy Management</h2>
      <p><strong>Production:</strong> {solarData.production} kWh</p>
      <p><strong>Usage:</strong> {solarData.usage} kWh</p>
      <p><strong>Battery:</strong> {solarData.battery}%</p>
    </div>
  );
};

export default SolarManagement;
