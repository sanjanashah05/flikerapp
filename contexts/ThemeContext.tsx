import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  text: string;
  textSecondary: string;
  border: string;
  card: string;
  tabBar: string;
  tabBarActive: string;
}

const lightColors: ThemeColors = {
  background: '#ffffff',
  surface: '#f5f5f5',
  primary: '#F85F6A',
  text: '#000000',
  textSecondary: '#666666',
  border: '#e0e0e0',
  card: '#ffffff',
  tabBar: '#f8f8f8',
  tabBarActive: '#F85F6A',
};

const darkColors: ThemeColors = {
  background: '#000000',
  surface: '#1e1e1e',
  primary: '#F85F6A',
  text: '#ffffff',
  textSecondary: '#cccccc',
  border: '#333333',
  card: '#1e1e1e',
  tabBar: '#1e1e1e',
  tabBarActive: '#F85F6A',
};

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeState] = useState<Theme>('system');

  const isDark = theme === 'system' 
    ? systemColorScheme === 'dark' 
    : theme === 'dark';

  const colors = isDark ? darkColors : lightColors;

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          setThemeState(savedTheme as Theme);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, colors, isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};