import type { User, PhoenixPersona } from '../types';

// In a real app, this would be an API call. Here, we use localStorage for prototyping.
const USERS_KEY = 'phoenix_quiz_users';
const PERSONAS_KEY = 'phoenix_quiz_personas';
const SESSION_KEY = 'phoenix_quiz_session';

// Helper to get users from localStorage
const getUsers = (): Record<string, string> => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : {};
};

// Helper to get personas from localStorage
const getPersonas = (): Record<string, PhoenixPersona> => {
  const personas = localStorage.getItem(PERSONAS_KEY);
  return personas ? JSON.parse(personas) : {};
};

export const register = (username: string, password: string):User | null => {
  const users = getUsers();
  if (users[username]) {
    throw new Error('Username already exists.');
  }
  users[username] = password; // In a real app, hash the password!
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  const user = { username };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
};

export const login = (username: string, password: string): User | null => {
  const users = getUsers();
  if (!users[username] || users[username] !== password) {
    throw new Error('Invalid username or password.');
  }
  
  const user = { username };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
};

export const logout = (): void => {
  sessionStorage.removeItem(SESSION_KEY);
};

export const getCurrentUser = (): User | null => {
  const userJson = sessionStorage.getItem(SESSION_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

export const savePersona = (username: string, persona: PhoenixPersona): void => {
  const personas = getPersonas();
  personas[username] = persona;
  localStorage.setItem(PERSONAS_KEY, JSON.stringify(personas));
};

export const getPersona = (username: string): PhoenixPersona | null => {
  const personas = getPersonas();
  return personas[username] || null;
};

export const deletePersona = (username: string): void => {
  const personas = getPersonas();
  delete personas[username];
  localStorage.setItem(PERSONAS_KEY, JSON.stringify(personas));
};