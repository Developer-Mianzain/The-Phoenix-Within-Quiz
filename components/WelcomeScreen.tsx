import React from 'react';
import { PhoenixIcon } from './icons/PhoenixIcon';
import type { AppState } from '../App';

interface WelcomeScreenProps {
  setAppState: (state: AppState) => void;
  onQuizStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ setAppState, onQuizStart }) => {
  return (
    <div className="text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-500/20 animate-fade-in">
      <div className="flex justify-center mb-6">
        <PhoenixIcon className="w-24 h-24 text-yellow-400" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
        The Phoenix Within
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
        Inspired by the upcoming novel <span className="font-semibold text-yellow-300">"Quiet Wins"</span>, this quiz helps you discover your inner phoenix. Answer five questions to reveal the unique strengths and resilience that burn within you.
      </p>
      <button
        onClick={onQuizStart}
        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-xl rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-400/50 mb-4 w-full max-w-xs"
      >
        Take the Quiz
      </button>
      <div className="flex items-center justify-center space-x-4">
        <button onClick={() => setAppState('login')} className="text-yellow-300 hover:text-yellow-100 transition">Login</button>
        <span className="text-gray-500">|</span>
        <button onClick={() => setAppState('register')} className="text-yellow-300 hover:text-yellow-100 transition">Register</button>
      </div>
    </div>
  );
};
