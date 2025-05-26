import React from 'react';
import './Sidebar.css';

const Sidebar = ({ navLinks }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-general-title">General</div>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className={link.active ? 'active' : ''}>
              <link.icon size={20} className="nav-icon" />
              <span>{link.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;