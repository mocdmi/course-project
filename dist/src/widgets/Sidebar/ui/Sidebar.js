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
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
export var Sidebar = function (props) {
    var _a;
    var className = props.className;
    var _b = useState(false), collapsed = _b[0], setCollapsed = _b[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ className: classNames(cls.Sidebar, (_a = {}, _a[cls.collapsed] = collapsed, _a), [className]) }, { children: [_jsx("button", __assign({ onClick: onToggle }, { children: "TOGGLE" })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { className: cls.lang })] }))] })));
};
