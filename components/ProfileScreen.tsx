import React, { useState, useEffect } from 'react';
import type { User, PhoenixPersona } from '../types';
import * as authService from '../services/authService';
import { CheckIcon } from './icons/CheckIcon';
import { PhoenixIcon } from './icons/PhoenixIcon';
import { ShareIcon } from './icons/ShareIcon';

interface ProfileScreenProps {
  currentUser: User | null;
  onTakeQuiz: () => void;
  justSaved?: boolean;
  onConfirmationShown?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ currentUser, onTakeQuiz, justSaved, onConfirmationShown }) => {
  const [persona, setPersona] = useState<PhoenixPersona | null>(null);
  const [loading, setLoading] = useState(true);
  const canShare = typeof navigator !== 'undefined' && !!navigator.share;

  useEffect(() => {
    if (currentUser) {
      const savedPersona = authService.getPersona(currentUser.username);
      setPersona(savedPersona);
    }
    setLoading(false);
  }, [currentUser]);

  useEffect(() => {
    if (justSaved && onConfirmationShown) {
      const timer = setTimeout(() => {
        onConfirmationShown();
      }, 3000); // Display message for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [justSaved, onConfirmationShown]);

  const handleDeletePersona = () => {
    if (currentUser && window.confirm('Are you sure you want to delete your saved Phoenix Persona? This action cannot be undone.')) {
      authService.deletePersona(currentUser.username);
      setPersona(null); // Update state to re-render the component to its initial view
    }
  };

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

  if (loading) {
    return <div className="text-center p-8">Loading profile...</div>;
  }
  
  if (!currentUser) {
    return <div className="text-center p-8">Please log in to view your profile.</div>
  }

  if (!persona) {
    return (
      <div className="text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-500/20 animate-fade-in">
        <div className="flex justify-center mb-6">
          <PhoenixIcon className="w-24 h-24 text-yellow-400 opacity-50" />
        </div>
        <h1 className="text-3xl font-bold text-gray-300 mb-4">Welcome, {currentUser.username}</h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
          You haven't discovered your Phoenix Persona yet. Take the quiz to reveal the strengths that burn within you.
        </p>
        <button
          onClick={onTakeQuiz}
          className="form-button max-w-xs"
        >
          Discover Your Phoenix
        </button>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-in-up relative">
      {justSaved && (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg border border-green-400 animate-fade-in-down z-10 whitespace-nowrap">
          <CheckIcon className="w-5 h-5" />
          <span>Persona Saved to Profile!</span>
        </div>
      )}
       <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">Welcome back, <span className="text-yellow-300">{currentUser.username}</span>!</h2>
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-yellow-500/20 animate-glow">
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
      <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-4">
        {canShare && (
          <button
            onClick={handleShare}
            className="px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <ShareIcon className="w-5 h-5" />
            Share Persona
          </button>
        )}
        <button
          onClick={onTakeQuiz}
          className="px-8 py-3 bg-gray-700 text-yellow-300 font-bold text-lg rounded-full shadow-lg hover:bg-gray-600 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50 w-full sm:w-auto"
        >
          Retake Quiz
        </button>
        <button
          onClick={handleDeletePersona}
          className="px-8 py-3 bg-red-900/40 text-red-300 font-bold text-lg rounded-full shadow-lg hover:bg-red-900/60 transform transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50 w-full sm:w-auto"
        >
          Delete Persona
        </button>
      </div>
    </div>
  );
};