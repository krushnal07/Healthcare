import React from 'react';
import './CalendarView.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = ({ calendarData }) => {
  const { month, year, days, appointments, detailedAppointments } = calendarData;
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const SKELETON_EMPTY_DAYS = 5;
  
  return (
    <div className="calendar-view card-style">
      <div className="calendar-header">
        <h3 className="calendar-month-year">{month} {year}</h3>
        <div className="calendar-nav">
          <ChevronLeft size={20} className="nav-arrow" />
          <ChevronRight size={20} className="nav-arrow" />
        </div>
      </div>
      <div className="calendar-grid">
        {dayNames.map(day => <div key={day} className="calendar-day-name">{day}</div>)}
        {Array(SKELETON_EMPTY_DAYS).fill(null).map((_, index) => <div key={`empty-${index}`} className="calendar-day empty"></div>)}
        {days.map(day => (
          <div key={day} className="calendar-day">
            <span>{day}</span>
            {appointments[day] && appointments[day].map((time, i) => (
              <div key={i} className="calendar-appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="detailed-appointments">
        {detailedAppointments.map(appt => (
           <div key={appt.id} className="detailed-appointment-card" style={{borderLeftColor: appt.color}}>
            <div className="appt-icon-wrapper" style={{backgroundColor: `${appt.color}20`}}> {/* Icon bg with opacity */}
              <appt.icon size={18} style={{color: appt.color}} />
            </div>
            <div className="appt-info">
              <div className="appt-type">{appt.type}</div>
              <div className="appt-name-time">{appt.name} • {appt.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;