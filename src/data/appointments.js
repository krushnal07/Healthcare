import { Activity, Eye, HeartPulse, Brain, CheckCircle2, Briefcase } from 'lucide-react';
export const calendarData = {
  month: 'October',
  year: 2021,
  days: Array.from({ length: 31 }, (_, i) => i + 1), 
  appointments: {
    9: ['09:00'],
    12: ['11:00'],
    15: ['13:00'],
    18: ['15:00'],
  },
  detailedAppointments: [
    { id: 'dentist', type: 'Dentist', name: 'Dr. Alex Martin', time: '09:00 - 10:00 AM', icon: Briefcase, color: '#4A90E2' },
    { id: 'physio', type: 'Physiotherapy Appointment', name: 'Dr. Sarah Kelvin', time: '11:00 - 12:00 PM', icon: Activity, color: '#50E3C2' },
  ]
};

export const upcomingScheduleData = {
  thursday: [
    { id: 1, title: 'Health checkup complete', time: '10:00 AM', icon: CheckCircle2, color: 'var(--design-green)' },
    { id: 2, title: 'Ophthalmologist', time: '11:30 AM', icon: Eye, color: 'var(--design-primary-blue)' },
  ],
  saturday: [
    { id: 3, title: 'Cardiologist', time: '02:00 PM', icon: HeartPulse, color: 'var(--design-primary-blue)' },
    { id: 4, title: 'Neurologist', time: '04:00 PM', icon: Brain, color: 'var(--design-primary-blue)' },
  ],
};