import React from 'react';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="navbar">
      <span className="logo">Green API Chat</span>
      <div className="user">
        <button onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

export default Navbar;
