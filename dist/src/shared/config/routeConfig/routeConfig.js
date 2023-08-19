var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
})(AppRoutes || (AppRoutes = {}));
export var RouterPath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RouterPath.main,
        element: _jsx(MainPage, {}),
    },
    _b[AppRoutes.ABOUT] = {
        path: RouterPath.about,
        element: _jsx(AboutPage, {}),
    },
    _b);
