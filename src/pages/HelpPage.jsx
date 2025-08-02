import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HelpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate sending the message to your email
      await fetch("https://formsubmit.co/arshadnoorani2004@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Help & Support</h2>
        <p className="text-gray-700 mb-6">If you have any questions or concerns, feel free to contact us using the form below.</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded-lg mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded-lg mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full border px-3 py-2 rounded-lg mt-1"></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Submit</button>
          {submitted && <p className="text-green-600 text-sm mt-2">Your message has been sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default HelpPage;
