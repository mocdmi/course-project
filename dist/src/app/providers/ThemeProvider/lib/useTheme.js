import { useContext } from 'react';
import { LOCAL_STOORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
export var useTheme = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STOORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme, toggleTheme: toggleTheme };
};
