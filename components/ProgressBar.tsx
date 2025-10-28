import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuetext={`Question ${current} of ${total}`}
      className="w-full bg-gray-700 rounded-full h-4 mb-8 border border-gray-600 shadow-inner"
    >
      <div
        className="bg-gradient-to-r from-orange-500 to-yellow-500 h-4 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};