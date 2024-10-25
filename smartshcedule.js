import React, { useState } from 'react';
import './SmartSchedule.css'; // Import the CSS file
import { FaTshirt, FaUtensils, FaCarBattery } from 'react-icons/fa'; // Import icons

const SmartSchedule = () => {
  const [schedule, setSchedule] = useState({
    washingMachine: '',
    dishwasher: '',
    evCharger: ''
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
      <div className="schedule-card">
        <form>
          <div className="form-group">
            <label><FaTshirt /> Washing Machine</label>
            <input type="time" name="washingMachine" value={schedule.washingMachine} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label><FaUtensils /> Dishwasher</label>
            <input type="time" name="dishwasher" value={schedule.dishwasher} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label><FaCarBattery /> EV Charger</label>
            <input type="time" name="evCharger" value={schedule.evCharger} onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmartSchedule;