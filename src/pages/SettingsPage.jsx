import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SettingsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Settings</h2>
        <p className="text-gray-700 mb-2">Here you can manage your account preferences.</p>
        {/* Add settings options here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Coming soon: theme toggle, notification settings, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
