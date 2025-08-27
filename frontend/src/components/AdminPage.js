import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import VlogForm from './VlogForm';

function AdminPage({ token, onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const navigate = useNavigate();

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    onLogin(token);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        {!isLoggedIn ? (
          <>
            <h1 className="admin-title">Admin Portal</h1>
            <AdminLogin onLogin={handleLogin} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button onClick={handleBack} className="btn btn-secondary">
                ← Back to Home
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="admin-title">Create New Vlog</h1>
            <VlogForm token={token} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button onClick={handleBack} className="btn btn-secondary">
                ← Back to Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
