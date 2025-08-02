import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import History from '../components/History';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedHistory = localStorage.getItem('history');

    if (!token) {
      navigate('/auth');
    } else if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Scan History</h2>
        <History items={history} />
      </div>
    </div>
  );
};

export default HistoryPage;
