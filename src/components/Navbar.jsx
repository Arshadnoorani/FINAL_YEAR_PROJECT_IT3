import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src="/logo_nobg.png"
          alt="MediScan Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-xl font-bold text-indigo-600">MediScan AI</span>
      </div>
      <div className="space-x-4">
        <button onClick={() => navigate('/profile')} className="text-sm font-semibold hover:underline">Profile</button>
        <button onClick={() => navigate('/history')} className="text-sm font-semibold hover:underline">History</button>
        <button onClick={() => navigate('/settings')} className="text-sm font-semibold hover:underline">Settings</button>
        <button onClick={() => navigate('/help')} className="text-sm font-semibold hover:underline">Help</button>
        <button onClick={onLogout} className="text-sm text-red-500 font-semibold hover:underline">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;