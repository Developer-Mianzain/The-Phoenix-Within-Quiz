import React, { useState, useEffect } from 'react';
import { PhoenixIcon } from './icons/PhoenixIcon';

const messages = [
  "Consulting the embers...",
  "Fanning the flames of creation...",
  "Your phoenix is taking flight...",
  "Gathering starlight and ashes...",
  "Listening to the whispers of resilience...",
];

export const LoadingScreen: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex flex-col items-center justify-center p-8">
      <PhoenixIcon aria-hidden="true" className="w-32 h-32 text-yellow-400 animate-pulse-slow" />
      <div aria-live="polite" aria-atomic="true" className="mt-8 text-xl text-gray-300 h-8">
        {messages.map((message, index) => (
          <span
            key={index}
            className={`transition-opacity duration-1000 absolute left-1/2 -translate-x-1/2 ${
              index === currentMessageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {message}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};