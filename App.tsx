import React, { useState, useCallback, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { Header } from './components/Header';
import { generatePhoenixPersona } from './services/geminiService';
import * as authService from './services/authService';
import type { PhoenixPersona, User } from './types';

export type AppState = 'welcome' | 'quiz' | 'loading' | 'result' | 'login' | 'register' | 'profile';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [phoenixResult, setPhoenixResult] = useState<PhoenixPersona | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setJustSaved(false);
    setAppState('profile');
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setPhoenixResult(null);
    setUserAnswers([]);
    setJustSaved(false);
    setAppState('welcome');
  };
  
  const handleQuizStart = () => {
    setUserAnswers([]);
    setPhoenixResult(null);
    setError(null);
    setAppState('quiz');
  };

  const handleQuizComplete = useCallback(async (answers: string[]) => {
    setUserAnswers(answers);
    setAppState('loading');
    setError(null);
    try {
      const result = await generatePhoenixPersona(answers);
      setPhoenixResult(result);
      setAppState('result');
    } catch (err) {
      console.error('Error generating phoenix persona:', err);
      setError('An ancient magic has interfered. Please try again.');
      setAppState('result');
    }
  }, []);

  const handleSavePersona = () => {
    if (currentUser && phoenixResult) {
      authService.savePersona(currentUser.username, phoenixResult);
      setJustSaved(true);
      setAppState('profile');
    }
  };

  const handleRestart = () => {
    setAppState('welcome');
    setUserAnswers([]);
    setPhoenixResult(null);
    setError(null);
    setJustSaved(false);
  };

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomeScreen setAppState={setAppState} onQuizStart={handleQuizStart} />;
      case 'quiz':
        return <QuizScreen onComplete={handleQuizComplete} />;
      case 'loading':
        return <LoadingScreen />;
      case 'result':
        return <ResultScreen persona={phoenixResult} error={error} onRestart={handleRestart} onSave={handleSavePersona} currentUser={currentUser} setAppState={setAppState} />;
      case 'login':
        return <LoginScreen onLogin={handleLogin} setAppState={setAppState} />;
      case 'register':
        return <RegisterScreen onRegister={handleLogin} setAppState={setAppState} />;
      case 'profile':
        return <ProfileScreen currentUser={currentUser} onTakeQuiz={handleQuizStart} justSaved={justSaved} onConfirmationShown={() => setJustSaved(false)} />;
      default:
        return <WelcomeScreen setAppState={setAppState} onQuizStart={handleQuizStart} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col items-center justify-start">
      <Header currentUser={currentUser} onLogout={handleLogout} setAppState={setAppState} />
      <main className="w-full max-w-2xl mx-auto p-4 pt-24 md:pt-28">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;