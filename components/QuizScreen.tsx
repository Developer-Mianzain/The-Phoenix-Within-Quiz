
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestionCard } from './QuizQuestionCard';
import { ProgressBar } from './ProgressBar';

interface QuizScreenProps {
  onComplete: (answers: string[]) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerSelect = (answerValue: string) => {
    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <div className="w-full">
      <ProgressBar current={currentQuestionIndex + 1} total={QUIZ_QUESTIONS.length} />
      <QuizQuestionCard
        key={currentQuestionIndex}
        question={currentQuestion}
        onAnswer={handleAnswerSelect}
        questionNumber={currentQuestionIndex + 1}
      />
    </div>
  );
};
