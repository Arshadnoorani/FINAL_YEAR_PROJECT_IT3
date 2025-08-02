import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password)
    setLoading(true);
    setMessage('');

    const endpoint = isSignup ? 'http://localhost:8000/api/auth/register' : 'http://localhost:8000/api/auth/login';
    const payload = isSignup
      ? { fullname: fullName, email, password }
      : { email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || 'Something went wrong');
      } else {
        setMessage(`${isSignup ? 'Registration' : 'Login'} successful!`);
        localStorage.setItem('token', data.token);
       
        // Redirect to profile page after successful login/signup
        setTimeout(() => navigate('/profile'), 150);

           // ✅ correct path
        // Optional: store JWT
        // You can redirect or update auth state here
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l-xl transition ${
              !isSignup ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsSignup(false)}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-xl transition ${
              isSignup ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          {isSignup ? 'Create your account' : 'Welcome Back 👋'}
        </h2>

        {message && (
          <div className="mb-4 text-sm text-center text-red-500">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition-colors font-semibold"
          >
            {loading ? 'Processing...' : isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {!isSignup && (
          <div className="text-right text-sm mt-3">
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;