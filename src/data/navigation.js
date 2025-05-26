import {
  LayoutDashboard,
  History,
  CalendarDays,
  CalendarCheck2,
  BarChart3,
  FlaskConical,
  MessageSquare,
  HelpCircle,
  Settings,
} from 'lucide-react';

export const navLinks = [
  { id: 'dashboard', text: 'Dashboard', icon: LayoutDashboard, active: true },
  { id: 'history', text: 'History', icon: History },
  { id: 'calendar', text: 'Calendar', icon: CalendarDays },
  { id: 'appointments', text: 'Appointments', icon: CalendarCheck2 },
  { id: 'statistics', text: 'Statistics', icon: BarChart3 },
  { id: 'tests', text: 'Tests', icon: FlaskConical },
  { id: 'chat', text: 'Chat', icon: MessageSquare },
  { id: 'support', text: 'Support', icon: HelpCircle },
  { id: 'setting', text: 'Setting', icon: Settings },
];