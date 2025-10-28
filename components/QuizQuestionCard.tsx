import React, { useId } from 'react';
import type { QuizQuestion } from '../types';

interface QuizQuestionCardProps {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
  questionNumber: number;
}

export const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({ question, onAnswer, questionNumber }) => {
  const headingId = useId();

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-yellow-500/20 animate-fade-in-up">
      <h2 id={headingId} className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8 text-center">
        <span className="text-yellow-400 font-bold mr-2">{questionNumber}.</span> {question.question}
      </h2>
      <div role="group" aria-labelledby={headingId} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.value)}
            className="w-full text-left p-4 rounded-lg bg-gray-700/60 border border-gray-600 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <p className="text-lg text-gray-200">{answer.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};