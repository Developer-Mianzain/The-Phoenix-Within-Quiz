import React, { useState } from 'react';
import * as authService from '../services/authService';
import type { User } from '../types';
import type { AppState } from '../App';

interface LoginScreenProps {
  onLogin: (user: User) => void;
  setAppState: (state: AppState) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, setAppState }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const user = authService.login(username, password);
      if (user) {
        onLogin(user);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-500/20 animate-fade-in-up">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
        Login
      </h2>
      {error && <p role="alert" className="text-red-400 bg-red-500/10 p-3 rounded-lg text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
            autoComplete="current-password"
          />
        </div>
        <div>
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      <p className="text-center text-sm text-gray-400 mt-6">
        Don't have an account?{' '}
        <button onClick={() => setAppState('register')} className="font-semibold text-yellow-400 hover:text-yellow-300 transition">
          Register here
        </button>
      </p>
    </div>
  );
};