// src/App.jsx
import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Profilepage from './pages/Profilepage';
import ChatBot from './components/ChatBot';
import History from './components/History';
import Navbar from './components/Navbar';
import HistoryPage from './pages/HistroyPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Navbar from './components/Navbar';
// import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          
          {/* <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        /> */}
        </Routes>
      {/* </BrowserRouter> */}

    </>
  );
};

export default App;
