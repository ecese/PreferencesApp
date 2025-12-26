import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useTheme() {
  const [theme, setTheme] = useState('light');
  


  useEffect(() => {
    AsyncStorage.getItem('theme').then(stored => {
      if (stored) {
        setTheme(stored);
      }
    });
  }, []);

 
  const toggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    await AsyncStorage.setItem('theme', nextTheme);
  };

  return { theme, toggleTheme };
}
