export interface Answer {
  text: string;
  value: string;
}

export interface QuizQuestion {
  question: string;
  answers: Answer[];
  key: string;
}

export interface PhoenixPersona {
  phoenixName: string;
  description: string;
  strengths: string[];
  challenge: string;
}

export interface User {
  username: string;
}