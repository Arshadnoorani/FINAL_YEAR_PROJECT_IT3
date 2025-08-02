import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatBot from '../components/ChatBot';
import History from '../components/History';

const Profilepage = () => {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (!token) {
      navigate('/auth');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleAnalyze = ({ image, prompt, answer }) => {
    const imageURL = URL.createObjectURL(image);
    const entry = {
      date: new Date().toLocaleString(),
      imageURL,
      prompt,
      answer,
    };
    const updatedHistory = [entry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Navbar onLogout={handleLogout} />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <img
            src="/log.png"
            alt="User Avatar"
            className="w-32 h-32 mx-auto border-4 border-indigo-200 object-cover"
          />
          <h2 className="text-2xl font-bold text-indigo-700 mt-2">{user?.fullname}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Sample Prompts Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">How to Get the Best Results</h2>

          <div className="grid gap-4 sm:grid-cols-2 mb-10">
            <div className="bg-indigo-60 rounded-lg p-4 text-gray-700 shadow">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>Describe medical condition in this image.</li>
                <li>What could be the possible diagnosis?</li>
                <li>Analyze any unusual areas in the image.</li>
                <li>what does this scan indicate about the patient's health?</li>
                <li>Explain what the image might suggest overall.</li>
              </ul>
            </div>
            <div className="bg-indigo-60 rounded-lg p-4 text-gray-700 shadow">
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                <li>Describe any abnormalities s in this image.</li>
                <li>Point out areas that may need attention.</li>
                <li>what are the key findings in this image?</li>
                <li>Give a full overview of what this image shows.</li>
                <li>What would a radiologist look for in this image?</li>
              </ul>
            </div>
          </div>

          <ChatBot onAnalyze={handleAnalyze} />
          <History items={history} />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
