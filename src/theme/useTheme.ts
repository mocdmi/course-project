import { useContext } from 'react';
import { LOCAL_STOORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STOORAGE_THEME_KEY, newTheme);
    };
    
    return { theme, toggleTheme };
}