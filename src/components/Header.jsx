import React from 'react';
import './Header.css';
import { Search, Bell, Plus } from 'lucide-react';


const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        Healthcare<span className="logo-dot">.</span>
      </div>
      <div className="header-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search..." disabled />
      </div>
      <div className="header-actions">
        <button className="action-button add-button">
          <Plus size={20} />
        </button>
        <Bell size={20} className="action-icon" />
        <div className="user-profile">
         
        
        </div>
      </div>
    </header>
  );
};

export default Header;