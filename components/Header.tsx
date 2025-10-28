import React from 'react';
import type { User } from '../types';
import type { AppState } from '../App';
import { PhoenixIcon } from './icons/PhoenixIcon';

interface HeaderProps {
  currentUser: User | null;
  onLogout: () => void;
  setAppState: (state: AppState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentUser, onLogout, setAppState }) => {
  const focusRingClasses = "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400";

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav aria-label="Main navigation" className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={() => setAppState('welcome')} className={`flex items-center space-x-2 text-white hover:text-yellow-300 transition ${focusRingClasses}`}>
          <PhoenixIcon className="w-8 h-8 text-yellow-400" />
          <span className="font-bold text-lg hidden sm:block">The Phoenix Within</span>
        </button>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <button onClick={() => setAppState('profile')} className={`text-gray-300 hover:text-white transition ${focusRingClasses}`}>
                Profile
              </button>
              <button onClick={onLogout} className={`bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30 hover:bg-yellow-500/30 transition ${focusRingClasses}`}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setAppState('login')} className={`text-gray-300 hover:text-white transition ${focusRingClasses}`}>
                Login
              </button>
              <button onClick={() => setAppState('register')} className={`bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition ${focusRingClasses}`}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};