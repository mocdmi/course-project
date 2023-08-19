var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
export var Navbar = function (props) {
    var className = props.className;
    return (_jsx("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.links }, { children: [_jsx(AppLink, __assign({ to: RouterPath.main, className: cls.mainLink, theme: AppLinkTheme.INVERTED }, { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" })), _jsx(AppLink, __assign({ to: RouterPath.about, theme: AppLinkTheme.INVERTED }, { children: "\u041E \u0441\u0430\u0439\u0442\u0435" }))] })) })));
};
