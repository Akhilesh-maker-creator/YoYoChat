import { useEffect } from 'react';
import { useThemeHook } from './useThemeHook'; 

const ThemeSynchronizer = () => {

  const { theme } = useThemeHook();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]); 
  return null; 
};

export default ThemeSynchronizer;