import React, { useState } from 'react';

const SmartSchedule = () => {
  const [schedule, setSchedule] = useState({
    washingMachine: '12:00 PM',
    dishwasher: '2:00 AM',
    evCharger: '11:00 PM'
  });

  const handleChange = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="smart-schedule">
      <h2>Smart Scheduling</h2>
      <form>
        <label>Washing Machine</label>
        <input type="time" name="washingMachine" value={schedule.washingMachine} onChange={handleChange} />

        <label>Dishwasher</label>
        <input type="time" name="dishwasher" value={schedule.dishwasher} onChange={handleChange} />

        <label>EV Charger</label>
        <input type="time" name="evCharger" value={schedule.evCharger} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SmartSchedule;
