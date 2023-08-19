import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["DARK"] = "dark";
    Theme["LIGHT"] = "light";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({});
export var LOCAL_STOORAGE_THEME_KEY = 'theme';
