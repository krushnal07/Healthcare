import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = ({ scheduleData }) => {
  return (
    <div className="upcoming-schedule card-style">
      <h3 className="card-title">The Upcoming Schedule</h3>
      <div className="schedule-day-group">
        <p className="schedule-day-title">On Thursday</p>
        {scheduleData.thursday.map(appt => (
          <SimpleAppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
      <div className="schedule-day-group">
        <p className="schedule-day-title">On Saturday</p>
        {scheduleData.saturday.map(appt => (
          <SimpleAppointmentCard key={appt.id} appointment={appt} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;