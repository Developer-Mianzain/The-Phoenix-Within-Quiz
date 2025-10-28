import React from 'react';
import type { PhoenixPersona, User } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { WarningIcon } from './icons/WarningIcon';
import { ShareIcon } from './icons/ShareIcon';
import type { AppState } from '../App';

interface ResultScreenProps {
  persona: PhoenixPersona | null;
  error: string | null;
  onRestart: () => void;
  onSave: () => void;
  currentUser: User | null;
  setAppState: (state: AppState) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ persona, error, onRestart, onSave, currentUser, setAppState }) => {
  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  const handleShare = async () => {
    if (canShare && persona) {
      try {
        await navigator.share({
          title: 'The Phoenix Within Quiz',
          text: `I discovered my inner phoenix is the "${persona.phoenixName}"!\n\n"${persona.description}"\n\nTake the quiz to find yours:`,
          url: 'http://www.quietwinsbook.com',
        });
      } catch (err) {
        // Fail silently if the user cancels the share action (AbortError).
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    }
  };

  if (error) {
    return (
      <div role="alert" className="text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-red-500/50 animate-fade-in">
        <div className="flex justify-center mb-6">
          <WarningIcon className="w-24 h-24 text-red-400" />
        </div>
        <h2 className="text-3xl font-bold text-red-400 mb-4">An Error Occurred</h2>
        <p className="text-lg text-gray-300 mb-8">{error}</p>
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-red-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-red-700 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!persona) {
    // This case can be reached if the component renders before the persona is available but there is no error.
    return (
        <div className="text-center">
            <p>Loading your result...</p>
        </div>
    );
  }

  const renderSaveSection = () => {
    if (currentUser) {
      return (
        <button onClick={onSave} className="form-button w-full max-w-xs mx-auto">
          Save to Profile
        </button>
      );
    }
    return (
      <div className="text-center bg-gray-900/40 p-4 rounded-lg w-full max-w-xs">
        <p className="text-gray-300 mb-3">Want to save your Phoenix Persona?</p>
        <button onClick={() => setAppState('register')} className="text-yellow-300 font-bold hover:text-yellow-100 transition">
          Create an account to save your result!
        </button>
      </div>
    );
  };

  return (
    <div className="w-full animate-fade-in-up">
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-yellow-500/20">
        <div className="text-center mb-6">
          <p className="text-yellow-400 text-lg">Your Inner Phoenix is</p>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mt-1">
            {persona.phoenixName}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex-shrink-0">
             <img src={`https://picsum.photos/seed/${persona.phoenixName.replace(/\s/g, '')}/400`} alt={`An artistic representation of ${persona.phoenixName}`} className="rounded-xl shadow-lg w-full h-auto aspect-square object-cover border-2 border-yellow-500/30" />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 text-lg italic mb-6">{persona.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl text-yellow-300 mb-3">Core Strengths:</h3>
              <ul className="space-y-2">
                {persona.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-yellow-300 mb-3">Your Journey:</h3>
              <p className="text-gray-200">{persona.challenge}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 flex flex-col items-center gap-4">
        {canShare && (
          <button
            onClick={handleShare}
            className="px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center gap-2 w-full max-w-xs"
          >
            <ShareIcon className="w-5 h-5" />
            Share Persona
          </button>
        )}
        {renderSaveSection()}
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-gray-700 text-yellow-300 font-bold text-lg rounded-full shadow-lg hover:bg-gray-600 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50 w-full max-w-xs"
        >
          Take the Quiz Again
        </button>
      </div>
    </div>
  );
};