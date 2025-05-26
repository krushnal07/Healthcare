import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  const IconComponent = appointment.icon;
  return (
    <div className="simple-appointment-card" style={{borderLeftColor: appointment.color}}>
      <div className="card-icon-wrapper" style={{ backgroundColor: `${appointment.color}20`}}> {/* Icon bg with opacity */}
        <IconComponent size={18} style={{color: appointment.color}} />
      </div>
      <div className="card-details">
        <p className="card-appt-title">{appointment.title}</p>
        <p className="card-appt-time">{appointment.time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;