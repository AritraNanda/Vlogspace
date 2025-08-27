import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ isAdmin, onLogout }) {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (isAdmin) {
      onLogout();
      navigate('/');
    } else {
      navigate('/admin');
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        VlogSpace
      </Link>
      <nav className="nav-buttons">
        <Link to="/" className="nav-btn secondary">
          Home
        </Link>
        <button 
          onClick={handleAdminClick}
          className="nav-btn primary"
        >
          {isAdmin ? 'Logout' : 'Admin'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
